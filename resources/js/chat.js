import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

function getFirebaseConfig() {
    return {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
}

function isConfigValid(cfg) {
    return cfg && cfg.apiKey && cfg.projectId && cfg.storageBucket && cfg.appId;
}

async function uploadAttachment(storage, conversationId, file) {
    const key = `conversations/${conversationId}/${Date.now()}-${file.name}`;
    const ref = storageRef(storage, key);
    await uploadBytes(ref, file);
    return await getDownloadURL(ref);
}

function detectAttachmentType(file) {
    if (!file) return null;
    const type = file.type;
    if (type.startsWith('audio/')) return 'voice';
    if (type.startsWith('image/')) return 'image';
    if (type.startsWith('video/')) return 'video';
    return 'document';
}

function guessAttachmentTypeFromUrl(url) {
    if (!url) return null;
    const u = url.toLowerCase();
    if (u.match(/\.(mp3|m4a|aac|wav|ogg|webm)(\?|$)/)) return 'voice';
    if (u.match(/\.(mp4|mov|webm)(\?|$)/)) return 'video';
    if (u.match(/\.(png|jpg|jpeg|gif|webp)(\?|$)/)) return 'image';
    return 'document';
}

function guessMimeForAudio(url) {
    const u = (url || '').toLowerCase();
    if (u.includes('.mp3')) return 'audio/mpeg';
    if (u.includes('.m4a') || u.includes('.aac')) return 'audio/mp4';
    if (u.includes('.wav')) return 'audio/wav';
    if (u.includes('.ogg')) return 'audio/ogg';
    if (u.includes('.webm')) return 'audio/webm';
    return 'audio/*';
}

export function mountChat(el) {
    const conversationId = el.getAttribute('data-conversation');
    const title = el.getAttribute('data-title') || 'Chat';
    const config = getFirebaseConfig();
    if (!isConfigValid(config)) {
        el.innerHTML = '<div class="border p-3 bg-yellow-50 rounded">Firebase is not configured. Set VITE_FIREBASE_* in .env.</div>';
        return;
    }

    const app = initializeApp(config);
    const db = getFirestore(app);
    const storage = getStorage(app);

    el.innerHTML = `
      <div class="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b bg-gray-50 font-medium">${title}</div>
        <div id="messages" class="h-[60vh] md:h-[70vh] overflow-y-auto px-4 py-3 space-y-2 bg-gradient-to-b from-white to-gray-50"></div>
        <div class="border-t p-3">
          <div id="filePreview" class="mb-2 hidden"></div>
          <div class="flex items-center gap-2">
            <input id="textInput" class="border rounded-full px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type a message" />
            <button id="recordBtn" type="button" class="px-3 py-2 border rounded hover:bg-gray-50">🎙️ Record</button>
            <span id="recTimer" class="text-sm text-gray-500 hidden">00:00</span>
            <label class="px-3 py-2 border rounded cursor-pointer hover:bg-gray-50">
              <input id="fileInput" type="file" class="hidden" />
              Attach
            </label>
            <button id="sendBtn" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">Send</button>
          </div>
        </div>
      </div>
    `;

    const messagesEl = el.querySelector('#messages');
    const textInput = el.querySelector('#textInput');
    const fileInput = el.querySelector('#fileInput');
    const filePreview = el.querySelector('#filePreview');
    const recordBtn = el.querySelector('#recordBtn');
    const recTimerEl = el.querySelector('#recTimer');

    let selectedFile = null;
    let mediaRecorder = null;
    let recordedChunks = [];
    let recStartedAt = null;
    let recTimerInterval = null;

    function clearPreview() {
        if (!filePreview) return;
        filePreview.innerHTML = '';
        filePreview.classList.add('hidden');
    }

    function renderPreview(file) {
        if (!file || !filePreview) return clearPreview();
        const url = URL.createObjectURL(file);
        let html = '';
        const base = 'inline-flex items-center gap-2 px-3 py-2 border rounded bg-gray-50';
        if (file.type.startsWith('image/')) {
            html = `<div class="${base}"><img src="${url}" class="h-16 w-auto rounded" /><div class="text-sm">${file.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`;
        } else if (file.type.startsWith('video/')) {
            html = `<div class="${base}"><video src="${url}" class="h-16 w-24" muted loop></video><div class="text-sm">${file.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`;
        } else if (file.type.startsWith('audio/')) {
            html = `<div class="${base}"><audio src="${url}" controls class="h-8"></audio><div class="text-sm">${file.name}</div><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`;
        } else {
            html = `<div class="${base}"><span class="text-sm">${file.name}</span><button type="button" id="removeFile" class="ml-2 text-red-600 text-sm">Remove</button></div>`;
        }
        filePreview.innerHTML = html;
        filePreview.classList.remove('hidden');
        const removeBtn = filePreview.querySelector('#removeFile');
        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                URL.revokeObjectURL(url);
                fileInput.value = '';
                selectedFile = null;
                clearPreview();
            });
        }
    }

    fileInput.addEventListener('change', () => {
        const file = fileInput.files && fileInput.files[0];
        selectedFile = file || null;
        renderPreview(selectedFile);
    });

    function updateRecTimer() {
        if (!recStartedAt || !recTimerEl) return;
        const secs = Math.floor((Date.now() - recStartedAt) / 1000);
        const mm = String(Math.floor(secs / 60)).padStart(2, '0');
        const ss = String(secs % 60).padStart(2, '0');
        recTimerEl.textContent = `${mm}:${ss}`;
    }

    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            recordedChunks = [];
            // Pick a mime type the browser supports (Safari often prefers mp4, Chrome prefers webm)
            const typeOptions = [
                'audio/webm;codecs=opus',
                'audio/webm',
                'audio/mp4;codecs=mp4a',
                'audio/mp4',
                'audio/ogg;codecs=opus',
                'audio/ogg'
            ];
            let chosen = '';
            for (const t of typeOptions) {
                if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) { chosen = t; break; }
            }
            mediaRecorder = new MediaRecorder(stream, chosen ? { mimeType: chosen } : undefined);
            mediaRecorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) recordedChunks.push(e.data);
            };
            mediaRecorder.onstop = () => {
                const fallbackType = chosen || 'audio/webm';
                const blob = new Blob(recordedChunks, { type: fallbackType });
                const ext = fallbackType.includes('mp4') ? 'm4a' : (fallbackType.includes('ogg') ? 'ogg' : 'webm');
                selectedFile = new File([blob], `voice-${Date.now()}.${ext}`, { type: blob.type });
                renderPreview(selectedFile);
                // stop tracks
                stream.getTracks().forEach(t => t.stop());
            };
            mediaRecorder.start();
            recStartedAt = Date.now();
            recTimerEl.classList.remove('hidden');
            updateRecTimer();
            recTimerInterval = setInterval(updateRecTimer, 500);
            recordBtn.textContent = '⏹️ Stop';
        } catch (err) {
            alert('Microphone permission denied or not available.');
        }
    }

    function stopRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        if (recTimerInterval) clearInterval(recTimerInterval);
        recTimerInterval = null;
        recTimerEl.classList.add('hidden');
        recordBtn.textContent = '🎙️ Record';
    }

    if (recordBtn) {
        recordBtn.addEventListener('click', () => {
            if (!mediaRecorder || mediaRecorder.state === 'inactive') {
                startRecording();
            } else {
                stopRecording();
            }
        });
    }
    const sendBtn = el.querySelector('#sendBtn');

    const messagesCol = collection(db, 'conversations', String(conversationId), 'messages');
    const scrollToBottom = () => {
        if (!messagesEl) return;
        messagesEl.scrollTop = messagesEl.scrollHeight;
    };
    const q = query(messagesCol, orderBy('createdAt'));
    onSnapshot(q, (snapshot) => {
        messagesEl.innerHTML = '';
        snapshot.forEach((doc) => {
            const m = doc.data();
            const isMine = (m.senderType === 'agent');
            const wrap = document.createElement('div');
            wrap.className = `flex ${isMine ? 'justify-end' : 'justify-start'}`;
            const bubble = document.createElement('div');
            bubble.className = `max-w-[75%] rounded-2xl px-4 py-2 shadow ${isMine ? 'bg-blue-600 text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md'}`;
            let html = '';
            if (m.body) {
                html += `<div class="whitespace-pre-wrap">${m.body}</div>`;
            }
            // Normalize attachment fields coming from different sources (Firestore, API, legacy)
            const att = (m.attachment) || {};
            const url = m.attachmentUrl || m.attachment_url || m.attachmentPath || m.attachment_path || m.url || m.fileUrl || m.file_url || att.url || att.path || null;
            const aType = m.attachmentType || m.attachment_type || att.type || guessAttachmentTypeFromUrl(url);
            if (url) {
                if (aType === 'image') html += `<img src="${url}" class="mt-2 rounded-lg max-w-full" />`;
                else if (aType === 'video') html += `<video src="${url}" controls preload="metadata" class="mt-2 rounded-lg max-w-full"></video>`;
                else if (aType === 'voice') {
                    const mime = guessMimeForAudio(url);
                    console.log('audio messages');
                    html += `<audio controls style="height: 40px;width: 500px;" preload="metadata" class="mt-2 w-full" controls>
                    <source src="${url}" type="${mime}">Your browser does not support the audio element.</audio>`;
                }
                else html += `<a class="mt-2 underline block" href="${url}" target="_blank">Attachment</a>`;
            } else if (aType === 'voice') {
                // Fallback text if type is known but URL missing
                html += `<div class="mt-1 italic opacity-80">Voice message (no URL)</div>`;
            }
            bubble.innerHTML = html;
            wrap.appendChild(bubble);
            messagesEl.appendChild(wrap);
            // Defer scroll after media loads
            const media = bubble.querySelector('img,video');
            if (media) {
                media.addEventListener('load', () => setTimeout(scrollToBottom, 10), { once: true });
                media.addEventListener('loadeddata', () => setTimeout(scrollToBottom, 10), { once: true });
            }
        });
        // Scroll now and once more after layout settles
        scrollToBottom();
        setTimeout(scrollToBottom, 50);
    });

    sendBtn.addEventListener('click', async () => {
        const body = textInput.value.trim();
        const file = selectedFile || (fileInput.files && fileInput.files[0]);
        if (!body && !file) return;
        let attachmentUrl = null;
        let attachmentType = null;
        if (file) {
            attachmentUrl = await uploadAttachment(storage, conversationId, file);
            attachmentType = detectAttachmentType(file);
        }
        await addDoc(messagesCol, {
            body: body || null,
            attachmentUrl,
            attachmentType,
            senderType: 'agent',
            createdAt: serverTimestamp(),
        });
        try {
            await fetch(`/api/activity/conversation/${conversationId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({ body, sender_type: 'agent' })
            });
        } catch (e) {}
        textInput.value = '';
        if (fileInput.value) fileInput.value = '';
        selectedFile = null;
        clearPreview();
        scrollToBottom();
    });
}


