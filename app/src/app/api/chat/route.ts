import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { message } = await request.json();
