import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth'; // Custom JWT middleware
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function GET(req) {
  await dbConnect();
  const userId = await verifyToken(req);

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const user = await User.findById(userId).select('-password');
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ user }, { status: 200 });
}
