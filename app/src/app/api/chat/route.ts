import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { message } = await request.json();
  
  // Divide el texto en palabras para simular tokens
  const words = ('Recibiste tu mensaje: ' + message + '.',
    'El streaming esta funcionando correctamente.').split(' ');
