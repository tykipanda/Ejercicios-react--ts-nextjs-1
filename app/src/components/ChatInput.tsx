'use client';

import { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
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
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm
                   font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        Enviar
      </button>
    </div>
  );
}
