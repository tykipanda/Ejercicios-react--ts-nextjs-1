'use client';

import { useState } from 'react';
import { Message } from '@/types/chat';
import { ChatWindow } from '@/components/ChatWindow';
import { ChatInput } from '@/components/ChatInput';
import { useLLMStream } from '@/hooks/useLLMStream';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { streamingText, isStreaming, startStream } = useLLMStream();
