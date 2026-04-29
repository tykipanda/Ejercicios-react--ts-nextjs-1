import { useState, useCallback, useRef } from 'react';

interface UseLLMStreamReturn {
  streamingText: string;   // texto que va apareciendo
  isStreaming: boolean;    // true mientras llegan datos
  error: string | null;   // mensaje de error si algo falla
  startStream: (message: string) => Promise<void>;
  reset: () => void;
}

export function useLLMStream(): UseLLMStreamReturn {
  const [streamingText, setStreamingText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
