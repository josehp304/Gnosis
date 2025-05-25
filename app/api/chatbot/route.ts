

import { NextResponse } from 'next/server';
import { FetchGroqResponse } from '@/app/action/askAi';


export async function POST(request: Request) {
  const body = await request.json();
  const data = body as {messages: {role: string, content: string}[]};
  const response = await FetchGroqResponse(data)
  return NextResponse.json(response);
}