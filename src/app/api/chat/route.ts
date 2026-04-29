import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { message } = await request.json();

  // Divide el texto en palabras para simular tokens
  const words = ('Recibiste tu mensaje: ' + message + '.',
    'El streaming esta funcionando correctamente.').split(' ');

    const stream = new ReadableStream({
    async start(controller) {
      for (const word of words) {
        // Convierte la palabra a bytes y la envia
        const chunk = new TextEncoder().encode(word + ' ');
        controller.enqueue(chunk);
