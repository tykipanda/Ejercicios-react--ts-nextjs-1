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

  // AbortController permite cancelar el stream si el usuario
  // envia otro mensaje antes de que termine el actual
  const abortControllerRef = useRef<AbortController | null>(null);

  const startStream = useCallback(async (message: string) => {
    // Cancela cualquier stream anterior en curso
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    setStreamingText('');
    setIsStreaming(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error('Error del servidor');
      if (!response.body) throw new Error('Sin body en la respuesta');

      // Abre el lector del stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
