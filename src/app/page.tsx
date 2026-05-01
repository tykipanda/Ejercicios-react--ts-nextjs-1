'use client';

import { useState } from 'react';
import { Message } from '@/types/chat';
import { ChatWindow } from '@/components/ChatWindow';
import { ChatInput } from '@/components/ChatInput';
import { useLLMStream } from '@/hooks/useLLMStream';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { streamingText, isStreaming, startStream } = useLLMStream();

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user', content,
      timestamp: new Date(),
    };
setMessages(prev => [...prev, userMessage]);


    // El hook maneja todo el streaming internamente
    await startStream(content);
};

// Construye la lista de mensajes para mostrar.
// Si hay streaming activo, agrega un mensaje temporal.
const displayMessages: Message[] = [...messages];
  if (isStreaming && streamingText) {
    displayMessages.push({
