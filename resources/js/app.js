import './bootstrap';
import { mountChat } from './chat';

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('chat-app');
    if (el) mountChat(el);
});
