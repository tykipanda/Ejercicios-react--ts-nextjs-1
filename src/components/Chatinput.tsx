'use client';

import { useStated, KeyboardEvent } from 'react';

interface ChatInputProps {
    onSend: (messages : string) => void;
    disabled: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState('');

    const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value.trim());
    setValue(''); // limpia el campo
  };

  // Enter = enviar, Shift+Enter = salto de linea
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 flex gap-2">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un mensaje... (Enter para enviar)"
        rows={1}
        disabled={disabled}
        className="flex-1 resize-none border border-gray-300 rounded-xl
                   px-4 py-2 text-sm focus:outline-none focus:ring-2
                   focus:ring-blue-500 disabled:bg-gray-50"
      />
);
}