export type MessageRole = 'user' | 'assistant';

export interface Message {
    id: string;
    role: MessageRole;
    content: string;
    timestamp: Date;
    isStreaming?: boolean; // true mientras llega la respuesta
}

export interface ChatState {
    messages: Message[];
    isLoading: boolean;
}