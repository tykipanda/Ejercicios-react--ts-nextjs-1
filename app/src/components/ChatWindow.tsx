'use client';

import { useEffect, useRef } from 'react';
import { Message } from '@/types/chat';
import { ChatBubble } from './ChatBubble';
import { SkeletonBubble } from './SkeletonBubble';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  // useRef apunta al elemento del fondo del chat
  const bottomRef = useRef<HTMLDivElement>(null);

  // Cada vez que llega un mensaje, hace scroll al fondo
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          <p>Empieza una conversacion...</p>
        </div>
      )}
