import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Clear cookie (or handle token cleanup on client)
    return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Logout failed', error: error.message }, { status: 500 });
  }
}
