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
      id: 'streaming',
      role: 'assistant',
      content: streamingText + '|', // el | simula cursor parpadeante
      timestamp: new Date(),
      isStreaming: true,
    });
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Chat con Streaming</h1>
      </div>
      <ChatWindow
        messages={displayMessages}
        isLoading={isStreaming && !streamingText}
      />
      <ChatInput onSend={handleSend} disabled={isStreaming} />
    </div>
  );
}
