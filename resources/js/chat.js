async function uploadFileToServer(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    
    const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': csrfToken || '',
        },
        body: formData,
    });
    
    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Upload failed' }));
        throw new Error(error.message || 'Failed to upload file');
    }
    
    const data = await response.json();
    return data.url;
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
    if (u.includes('.webm')) return 'audio/webm';
    if (u.includes('.ogg')) return 'audio/ogg';
    if (u.includes('.m4a') || u.includes('.aac')) return 'audio/mp4';
    if (u.includes('.wav')) return 'audio/wav';
    return 'audio/*';
}

export function mountChat(el) {
    const conversationId = el.getAttribute('data-conversation');
    const title = el.getAttribute('data-title') || 'Chat';
    const currentUserType = el.getAttribute('data-user-type') || '';
    const currentUserIdRaw = el.getAttribute('data-user-id');
    const currentUserId = currentUserIdRaw ? Number(currentUserIdRaw) : null;
    if (!conversationId) {
        el.innerHTML = '<div class="border p-3 bg-yellow-50 rounded">Missing conversation id.</div>';
        return;
    }

    el.innerHTML = `
      <div class="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b bg-gray-50 font-medium">${title}</div>
        <div id="messages" class="h-[60vh] md:h-[70vh] overflow-y-auto px-4 py-3 space-y-2 bg-gradient-to-b from-white to-gray-50"></div>
        <div class="border-t p-3">
          <div id="replyPreview" class="mb-2 hidden"></div>
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
    const replyPreview = el.querySelector('#replyPreview');
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
    let replyToMessage = null;
    let mediaRecorder = null;
    let recordedChunks = [];
    let recStartedAt = null;
    let recTimerInterval = null;

    function clearPreview() {
        if (!filePreview) return;
        filePreview.innerHTML = '';
        filePreview.classList.add('hidden');
    }

    function renderReplyPreview() {
        if (!replyPreview) return;
        if (!replyToMessage) {
            replyPreview.innerHTML = '';
            replyPreview.classList.add('hidden');
            return;
        }
        const sender = replyToMessage.sender_name || replyToMessage.sender_type || 'Unknown';
        const body = replyToMessage.body || (replyToMessage.attachment_type ? `Attachment (${replyToMessage.attachment_type})` : '');
        replyPreview.innerHTML = `
          <div class="flex items-center justify-between gap-2 border rounded bg-gray-50 px-3 py-2">
            <div class="text-sm">
              <div class="font-medium text-gray-700">Replying to ${sender}</div>
              <div class="text-gray-600 truncate max-w-[60vw]">${body}</div>
            </div>
            <button type="button" id="clearReply" class="text-sm text-red-600">Cancel</button>
          </div>
        `;
        replyPreview.classList.remove('hidden');
        const clearBtn = replyPreview.querySelector('#clearReply');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                replyToMessage = null;
                renderReplyPreview();
            });
        }
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
            // Use Opus/WebM format - more universally compatible than M4A
            // Opus is supported by Chrome, Firefox, Edge and most mobile players
            const opusFormats = [
                'audio/webm;codecs=opus',  // WebM with Opus codec (best compatibility)
                'audio/webm',               // WebM container
                'audio/ogg;codecs=opus',    // OGG with Opus (Firefox fallback)
                'audio/ogg'                 // OGG container
            ];
            let chosen = '';
            for (const t of opusFormats) {
                if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) {
                    chosen = t;
                    console.log('Selected audio format:', chosen);
                    break;
                }
            }
            
            // If Opus format is not supported, show error
            if (!chosen) {
                stream.getTracks().forEach(t => t.stop());
                alert('Audio recording is not supported in this browser. Please use a modern browser (Chrome, Firefox, or Edge).');
                return;
            }
            
            // Explicitly prevent M4A/MP4 fallback - only use Opus/WebM
            // Use timeslice to ensure proper chunk collection and finalization
            mediaRecorder = new MediaRecorder(stream, { 
                mimeType: chosen,
                audioBitsPerSecond: 128000 // Set bitrate for consistent encoding
            });
            
            // Verify the actual mimeType being used
            console.log('MediaRecorder mimeType:', mediaRecorder.mimeType);
            mediaRecorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) {
                    recordedChunks.push(e.data);
                }
            };
            mediaRecorder.onstop = async () => {
                // Ensure all chunks are collected and properly combined
                // Wait a bit to ensure all data is available
                await new Promise(resolve => setTimeout(resolve, 100));
                
                // Determine file extension based on chosen format
                const extension = chosen.includes('webm') ? 'webm' : 'ogg';
                const mimeType = chosen.includes('webm') ? 'audio/webm' : 'audio/ogg';
                
                // Verify we're not accidentally using M4A
                if (chosen.includes('mp4') || chosen.includes('m4a')) {
                    console.error('ERROR: M4A format detected! This should not happen.');
                    alert('Error: Browser fallback to M4A detected. Please use Chrome, Firefox, or Edge.');
                    stream.getTracks().forEach(t => t.stop());
                    return;
                }
                
                console.log('Creating audio file:', {
                    extension: extension,
                    mimeType: mimeType,
                    chunks: recordedChunks.length,
                    totalSize: recordedChunks.reduce((sum, chunk) => sum + chunk.size, 0)
                });
                
                // Create blob with explicit MIME type
                const audioBlob = new Blob(recordedChunks, { type: mimeType });
                
                // Ensure the file has proper extension and MIME type
                selectedFile = new File([audioBlob], `voice-${Date.now()}.${extension}`, { 
                    type: mimeType,
                    lastModified: Date.now()
                });
                
                console.log('Created file:', selectedFile.name, selectedFile.type);
                
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

    const scrollToBottom = () => {
        if (!messagesEl) return;
        messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    const messagesById = new Map();
    let lastMessageId = 0;

    const isNearBottom = () => {
        if (!messagesEl) return true;
        const threshold = 120;
        return messagesEl.scrollHeight - messagesEl.scrollTop - messagesEl.clientHeight < threshold;
    };

    const renderMessage = (m) => {
        messagesById.set(m.id, m);
        const isMine = (m.sender_type === currentUserType) && (currentUserId === null || m.sender_id === currentUserId);
        const wrap = document.createElement('div');
        wrap.className = `flex ${isMine ? 'justify-end' : 'justify-start'}`;
        wrap.dataset.messageId = String(m.id);
        const bubble = document.createElement('div');
        bubble.className = `max-w-[75%] rounded-2xl px-4 py-2 shadow ${isMine ? 'bg-blue-600 text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md'}`;
        let html = '';
        if (m.reply_to) {
            const replySender = m.reply_to.sender_name || m.reply_to.sender_type || 'Unknown';
            const replyBody = m.reply_to.body || (m.reply_to.attachment_type ? `Attachment (${m.reply_to.attachment_type})` : '');
            html += `
              <div class="mb-2 px-2 py-1 rounded border text-xs ${isMine ? 'bg-blue-500/40 border-blue-200' : 'bg-white border-gray-200'}">
                <div class="font-medium">${replySender}</div>
                <div class="truncate">${replyBody}</div>
              </div>
            `;
        }
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
                html += `<audio controls style="height: 40px;width: 500px;" preload="metadata" class="mt-2 w-full" controls>
                <source src="${url}" type="${mime}">Your browser does not support the audio element.</audio>`;
            }
            else html += `<a class="mt-2 underline block" href="${url}" target="_blank">Attachment</a>`;
        } else if (aType === 'voice') {
            // Fallback text if type is known but URL missing
            html += `<div class="mt-1 italic opacity-80">Voice message (no URL)</div>`;
        }
        html += `
          <div class="mt-2 text-xs opacity-80 flex justify-end gap-2">
            <button type="button" class="reply-btn underline" data-reply-id="${m.id}">Reply</button>
            ${isMine ? `<button type="button" class="edit-btn underline" data-message-id="${m.id}">Edit</button>
            <button type="button" class="delete-btn underline" data-message-id="${m.id}">Delete</button>` : ''}
          </div>
        `;
        bubble.innerHTML = html;
        wrap.appendChild(bubble);
        messagesEl.appendChild(wrap);
        const media = bubble.querySelector('img,video');
        if (media) {
            media.addEventListener('load', () => setTimeout(scrollToBottom, 10), { once: true });
            media.addEventListener('loadeddata', () => setTimeout(scrollToBottom, 10), { once: true });
        }
    };

    const wireReplyButtons = () => {
        messagesEl.querySelectorAll('.reply-btn').forEach((btn) => {
            if (btn.dataset.wired) return;
            btn.dataset.wired = '1';
            btn.addEventListener('click', () => {
                const id = Number(btn.getAttribute('data-reply-id'));
                const msg = messagesById.get(id);
                if (!msg) return;
                replyToMessage = {
                    id: msg.id,
                    sender_type: msg.sender_type,
                    sender_name: msg.sender_name,
                    body: msg.body,
                    attachment_type: msg.attachment_type,
                };
                renderReplyPreview();
            });
        });
    };

    const wireEditDeleteButtons = () => {
        messagesEl.querySelectorAll('.edit-btn').forEach((btn) => {
            if (btn.dataset.wired) return;
            btn.dataset.wired = '1';
            btn.addEventListener('click', async () => {
                const id = Number(btn.getAttribute('data-message-id'));
                const msg = messagesById.get(id);
                if (!msg) return;
                const currentText = msg.body || '';
                const newText = prompt('Edit message:', currentText);
                if (newText === null || newText === currentText) return;
                try {
                    const response = await fetch(`/api/activity/conversation/${conversationId}/messages/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                        },
                        body: JSON.stringify({ body: newText }),
                    });
                    if (!response.ok) return;
                    msg.body = newText;
                    fetchMessages(true);
                } catch (e) {}
            });
        });

        messagesEl.querySelectorAll('.delete-btn').forEach((btn) => {
            if (btn.dataset.wired) return;
            btn.dataset.wired = '1';
            btn.addEventListener('click', async () => {
                const id = Number(btn.getAttribute('data-message-id'));
                if (!confirm('Are you sure you want to delete this message?')) return;
                try {
                    const response = await fetch(`/api/activity/conversation/${conversationId}/messages/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                        },
                    });
                    if (!response.ok) return;
                    messagesById.delete(id);
                    const row = messagesEl.querySelector(`[data-message-id="${id}"]`);
                    if (row) row.remove();
                } catch (e) {}
            });
        });
    };

    const renderMessages = (items, options = { reset: false }) => {
        const shouldStickToBottom = isNearBottom();
        if (options.reset) {
            messagesEl.innerHTML = '';
            messagesById.clear();
            lastMessageId = 0;
        }
        items.forEach((m) => {
            if (messagesById.has(m.id)) return;
            renderMessage(m);
            if (m.id > lastMessageId) lastMessageId = m.id;
        });
        wireReplyButtons();
        wireEditDeleteButtons();
        if (shouldStickToBottom) {
            scrollToBottom();
            setTimeout(scrollToBottom, 50);
        }
    };

    let pollingTimer = null;
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const fetchMessages = async (initial = false) => {
        try {
            const url = initial
                ? `/api/activity/conversation/${conversationId}/messages?limit=200`
                : `/api/activity/conversation/${conversationId}/messages?since_id=${lastMessageId}&limit=200`;
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
            });
            if (!response.ok) return;
            const data = await response.json();
            if (initial) {
                renderMessages(data.messages || [], { reset: true });
            } else if ((data.messages || []).length > 0) {
                renderMessages(data.messages || []);
            }
        } catch (e) {}
    };

    fetchMessages(true);
    pollingTimer = setInterval(() => fetchMessages(false), 4000);
    window.addEventListener('beforeunload', () => {
        if (pollingTimer) clearInterval(pollingTimer);
    });

    sendBtn.addEventListener('click', async () => {
        const body = textInput.value.trim();
        const file = selectedFile || (fileInput.files && fileInput.files[0]);
        if (!body && !file) return;
        let attachmentUrl = null;
        let attachmentType = null;
        let messageBody = body;
        setSending(true);
        try {
            if (file) {
                const fileType = detectAttachmentType(file);
                attachmentUrl = await uploadFileToServer(file);
                attachmentType = fileType;
            }
            try {
                await fetch(`/api/activity/conversation/${conversationId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    },
                    body: JSON.stringify({ body: messageBody, sender_type: 'agent' })
                });
            } catch (e) {}
            try {
                await fetch(`/api/activity/conversation/${conversationId}/messages`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    },
                    body: JSON.stringify({
                        body: messageBody || null,
                        attachment_url: attachmentUrl || null,
                        attachment_type: attachmentType || null,
                        reply_to_id: replyToMessage?.id || null,
                    }),
                });
            } catch (e) {}
            textInput.value = '';
            if (fileInput.value) fileInput.value = '';
            selectedFile = null;
            replyToMessage = null;
            renderReplyPreview();
            clearPreview();
            scrollToBottom();
        } catch (err) {
            console.error('Failed to send message', err);
            alert('Failed to send message. Please try again.');
        } finally {
            setSending(false);
        }
    });
    
    // Edit/delete are not supported with backend polling.
}


