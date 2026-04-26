import clsx from 'clsx';
import { Message } from '../types/chat';

interface ChatBubbleProps {
  message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={clsx(
        'flex w-full mb-3',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      {/* Avatar del asistente */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold mr-2">
          AI
        </div>
      )}

      {/* Burbuja */}
      <div
        className={clsx(
          'max-w-[70%] rounded-2xl px-4 py-2 text-sm',
          isUser
            ? 'bg-blue-600 text-white rounded-tr-sm'
            : 'bg-gray-100 text-gray-800 rounded-tl-sm'
        )}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        <p
          className={clsx(
            'text-xs mt-1',
            isUser ? 'text-blue-200' : 'text-gray-400'
        )}
        >
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}