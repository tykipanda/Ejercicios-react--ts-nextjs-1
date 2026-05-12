import clsx from 'clsx';
import { Message } from '@/types/chat';

interface ChatBubbleProps {
  message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={clsx(
      'flex w-full mb-3',
      isUser ? 'justify-end' : 'justify-start'
    )}>
      {/* Avatar del asistente */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600
                        flex items-center justify-center
                        text-white text-sm font-bold mr-2">
          AI
        </div>
      )}
