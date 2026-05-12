// Los tipos son el 'contrato' de tu aplicacion.
// Definirlos primero evita errores despues.

export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  isStreaming?: boolean;  // true mientras llega la respuesta
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}
