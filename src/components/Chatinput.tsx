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

};