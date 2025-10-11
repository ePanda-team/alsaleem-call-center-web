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
                clearPreview();
            });
        }
    }

    fileInput.addEventListener('change', () => {
        const file = fileInput.files && fileInput.files[0];
        renderPreview(file);
    });
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
            if (m.attachmentUrl) {
                if (m.attachmentType === 'image') html += `<img src="${m.attachmentUrl}" class="mt-2 rounded-lg max-w-full" />`;
                else if (m.attachmentType === 'video') html += `<video src="${m.attachmentUrl}" controls class="mt-2 rounded-lg max-w-full"></video>`;
                else if (m.attachmentType === 'voice') html += `<audio src="${m.attachmentUrl}" controls class="mt-2 w-full"></audio>`;
                else html += `<a class="mt-2 underline block" href="${m.attachmentUrl}" target="_blank">Attachment</a>`;
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
        const file = fileInput.files && fileInput.files[0];
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
        clearPreview();
        scrollToBottom();
    });
}


