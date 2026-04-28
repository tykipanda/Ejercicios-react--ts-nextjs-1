'use client';

import { useState } from 'react';
import { Message } from '@/types/chat';
import { ChatWindow } from '@/components/ChatWindow';
import { ChatInput } from '@/components/ChatInput';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

    const handleSend = async (content: string) => {
    // 1. Agrega el mensaje del usuario a la lista
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // 2. Simula delay de 2 segundos (aqui conectaras la IA real)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 3. Agrega respuesta simulada del asistente
    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: 'Recibiste: "' + content + '". Aqui conectaras la IA real.',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };
