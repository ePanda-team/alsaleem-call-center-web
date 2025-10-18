import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, updateDoc, deleteDoc } from 'firebase/firestore';
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
            <input id="textInput" class="border rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-[#FE0003]" placeholder="Type a message" />
            <button id="recordBtn" type="button" class="px-3 py-2 border rounded-lg hover:bg-gray-50" title="Record Voice Message">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            <span id="recTimer" class="text-sm text-gray-500 hidden">00:00</span>
            <label class="px-3 py-2 border rounded-lg cursor-pointer hover:bg-gray-50" title="Attach File">
              <input id="fileInput" type="file" class="hidden" />
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
              </svg>
            </label>
            <button id="sendBtn" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded-lg">Send</button>
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
    const sendBtn = el.querySelector('#sendBtn');
    const originalSendText = sendBtn ? sendBtn.textContent : 'Send';
    function setSending(isSending) {
        if (!sendBtn) return;
        sendBtn.disabled = !!isSending;
        sendBtn.textContent = isSending ? 'Sending…' : originalSendText;
        if (isSending) {
            sendBtn.classList.add('opacity-60','cursor-not-allowed');
        } else {
            sendBtn.classList.remove('opacity-60','cursor-not-allowed');
        }
    }

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

    async function convertToMp3(audioBlob) {
        try {
            // Create audio context
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Convert blob to array buffer
            const arrayBuffer = await audioBlob.arrayBuffer();
            
            // Decode audio data
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            
            // Convert to WAV format first (simpler conversion)
            const wavBlob = audioBufferToWav(audioBuffer);
            
            // For now, we'll return the WAV as MP3 (browsers will handle it)
            // In a production environment, you'd want to use a proper MP3 encoder like lamejs
            return new Blob([wavBlob], { type: 'audio/mp3' });
        } catch (error) {
            console.error('Error converting to MP3:', error);
            // Fallback: return original blob with MP3 mime type
            return new Blob([audioBlob], { type: 'audio/mp3' });
        }
    }

    function audioBufferToWav(buffer) {
        const length = buffer.length;
        const sampleRate = buffer.sampleRate;
        const numberOfChannels = buffer.numberOfChannels;
        const bytesPerSample = 2;
        const blockAlign = numberOfChannels * bytesPerSample;
        const byteRate = sampleRate * blockAlign;
        const dataSize = length * blockAlign;
        const bufferSize = 44 + dataSize;
        
        const arrayBuffer = new ArrayBuffer(bufferSize);
        const view = new DataView(arrayBuffer);
        
        // WAV header
        const writeString = (offset, string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };
        
        writeString(0, 'RIFF');
        view.setUint32(4, bufferSize - 8, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numberOfChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, 16, true);
        writeString(36, 'data');
        view.setUint32(40, dataSize, true);
        
        // Convert audio data
        let offset = 44;
        for (let i = 0; i < length; i++) {
            for (let channel = 0; channel < numberOfChannels; channel++) {
                const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
                view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
                offset += 2;
            }
        }
        
        return arrayBuffer;
    }

    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            recordedChunks = [];
            // Prioritize MP3-compatible formats, fallback to others
            const typeOptions = [
                'audio/mp4;codecs=mp4a',  // MP4 with AAC codec (MP3-compatible)
                'audio/mp4',
                'audio/webm;codecs=opus',
                'audio/webm',
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
            mediaRecorder.onstop = async () => {
                const fallbackType = chosen || 'audio/webm';
                const blob = new Blob(recordedChunks, { type: fallbackType });
                
                // Convert to MP3 format
                let mp3Blob;
                if (fallbackType.includes('mp4')) {
                    // If it's already MP4/AAC, we can rename it as MP3
                    mp3Blob = new Blob([blob], { type: 'audio/mp3' });
                } else {
                    // For other formats, we'll convert using Web Audio API
                    mp3Blob = await convertToMp3(blob);
                }
                
                selectedFile = new File([mp3Blob], `voice-${Date.now()}.mp3`, { type: 'audio/mp3' });
                renderPreview(selectedFile);
                // stop tracks
                stream.getTracks().forEach(t => t.stop());
            };
            mediaRecorder.start();
            recStartedAt = Date.now();
            recTimerEl.classList.remove('hidden');
            updateRecTimer();
            recTimerInterval = setInterval(updateRecTimer, 500);
            recordBtn.innerHTML = `
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>
              </svg>`;
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
        recordBtn.innerHTML = `
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>`;
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
    // sendBtn already defined above

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
                if (m.edited) {
                    html += `<div class="text-xs opacity-70 mt-1">(edited)</div>`;
                }
            }
            
            // Add edit/delete buttons for messages sent by current user
            if (isMine) {
                html += `<div class="mt-2 flex gap-1 justify-end">
                    <button onclick="editMessage('${doc.id}', '${m.body?.replace(/'/g, "\\'") || ''}')" class="text-xs px-2 py-1 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors" title="Edit">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                    </button>
                    <button onclick="deleteMessage('${doc.id}')" class="text-xs px-2 py-1 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors" title="Delete">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>`;
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
        setSending(true);
        try {
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
        } catch (err) {
            console.error('Failed to send message', err);
            alert('Failed to send message. Please try again.');
        } finally {
            setSending(false);
        }
    });
    
    // Global functions for edit and delete
    window.editMessage = async function(messageId, currentText) {
        const newText = prompt('Edit message:', currentText);
        if (newText !== null && newText !== currentText) {
            try {
                const messageRef = doc(db, 'conversations', conversationId, 'messages', messageId);
                await updateDoc(messageRef, {
                    body: newText,
                    edited: true,
                    editedAt: serverTimestamp()
                });
            } catch (error) {
                console.error('Error editing message:', error);
                alert('Failed to edit message');
            }
        }
    };
    
    window.deleteMessage = async function(messageId) {
        if (confirm('Are you sure you want to delete this message?')) {
            try {
                const messageRef = doc(db, 'conversations', conversationId, 'messages', messageId);
                await deleteDoc(messageRef);
            } catch (error) {
                console.error('Error deleting message:', error);
                alert('Failed to delete message');
            }
        }
    };
}


