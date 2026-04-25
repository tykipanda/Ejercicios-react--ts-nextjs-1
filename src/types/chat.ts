export type MessageRole = 'user' | 'assistant';

export interface Massage {
    id: string;
    role: MessageRole;
    content: string;
    timestamp: Date;
    isStreaming?: boolean; // true mientras llega la respuesta
}