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
