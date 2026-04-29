import { useState, useCallback, useRef } from 'react';

interface UseLLMStreamReturn {
  streamingText: string;   // texto que va apareciendo
  isStreaming: boolean;    // true mientras llegan datos
  error: string | null;   // mensaje de error si algo falla
  startStream: (message: string) => Promise<void>;
  reset: () => void;
}
