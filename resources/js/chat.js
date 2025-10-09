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
    const config = getFirebaseConfig();
    if (!isConfigValid(config)) {
        el.innerHTML = '<div class="border p-3 bg-yellow-50">Firebase is not configured. Set VITE_FIREBASE_* in .env.</div>';
        return;
    }

    const app = initializeApp(config);
    const db = getFirestore(app);
    const storage = getStorage(app);

    el.innerHTML = `
      <div class="border rounded p-3 space-y-3">
        <div id="messages" class="h-64 overflow-y-auto border p-2 bg-white"></div>
        <div class="flex gap-2">
          <input id="textInput" class="border p-2 flex-1" placeholder="Type a message" />
          <input id="fileInput" type="file" class="border p-2" />
          <button id="sendBtn" class="px-4 py-2 bg-black text-white">Send</button>
        </div>
      </div>
    `;

    const messagesEl = el.querySelector('#messages');
    const textInput = el.querySelector('#textInput');
    const fileInput = el.querySelector('#fileInput');
    const sendBtn = el.querySelector('#sendBtn');

    const messagesCol = collection(db, 'conversations', String(conversationId), 'messages');
    const q = query(messagesCol, orderBy('createdAt'));
    onSnapshot(q, (snapshot) => {
        messagesEl.innerHTML = '';
        snapshot.forEach((doc) => {
            const m = doc.data();
            const div = document.createElement('div');
            div.className = 'mb-2';
            let body = m.body ? `<div>${m.body}</div>` : '';
            let attach = '';
            if (m.attachmentUrl) {
                if (m.attachmentType === 'image') attach = `<img src="${m.attachmentUrl}" class="max-w-xs" />`;
                else if (m.attachmentType === 'video') attach = `<video src="${m.attachmentUrl}" controls class="max-w-xs"></video>`;
                else if (m.attachmentType === 'voice') attach = `<audio src="${m.attachmentUrl}" controls></audio>`;
                else attach = `<a class="underline" href="${m.attachmentUrl}" target="_blank">Attachment</a>`;
            }
            div.innerHTML = `<div class="text-xs text-gray-500">${m.senderType || 'unknown'}</div>${body}${attach}`;
            messagesEl.appendChild(div);
        });
        messagesEl.scrollTop = messagesEl.scrollHeight;
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
            createdAt: serverTimestamp(),
        });
        textInput.value = '';
        if (fileInput.value) fileInput.value = '';
    });
}


