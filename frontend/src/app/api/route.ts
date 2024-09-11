// app/api/search/route.ts

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('name') || '';

  try {
    const response = await fetch(`http://localhost:3001/search?name=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.error();
  }
}
