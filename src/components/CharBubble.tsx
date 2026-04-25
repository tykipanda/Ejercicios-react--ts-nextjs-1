import clsx from 'clsx';
import { Message } from '../types/chat';

interface ChatBubbleProps {
    message: Message;
}

export function ChatBubble({ message} : ChatBubbleProps) {
    const isUser = message.role === 'user';
}