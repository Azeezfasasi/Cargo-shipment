import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function PUT(req) {
  await dbConnect();
  const userId = await verifyToken(req);

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { fullName, email, profileImage } = body;

  const user = await User.findById(userId);
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  user.fullName = fullName || user.fullName;
  user.email = email || user.email;
  user.profileImage = profileImage || user.profileImage;

  await user.save();

  return NextResponse.json({ message: 'Profile updated successfully', user }, { status: 200 });
}
