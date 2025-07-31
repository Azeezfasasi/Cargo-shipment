import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function PUT(req) {
  await dbConnect();
  const userId = await verifyToken(req);

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { currentPassword, newPassword } = body;

  const user = await User.findById(userId);
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: 'Current password is incorrect' }, { status: 400 });
  }

  const hashed = await bcrypt.hash(newPassword, 10);
  user.password = hashed;
  await user.save();

  return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
}
