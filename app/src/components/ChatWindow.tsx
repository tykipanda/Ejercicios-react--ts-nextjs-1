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
