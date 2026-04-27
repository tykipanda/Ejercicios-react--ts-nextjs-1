'use client';

import { useStated, KeyboardEvent } from 'react';

interface ChatInputProps {
    onSend: (messages : string) => void;
    disabled: boolean;
}