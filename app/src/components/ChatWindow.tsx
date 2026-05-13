'use client';

import { useEffect, useRef } from 'react';
import { Message } from '@/types/chat';
import { ChatBubble } from './ChatBubble';
import { SkeletonBubble } from './SkeletonBubble';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}
