import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export async function POST(req) {
  try {
    await dbConnect();
    const { token, password } = await req.json();

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return Response.json({ message: 'Token is invalid or has expired' }, { status: 400 });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return Response.json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error('Reset password error:', error);
    return Response.json({ message: 'Failed to reset password' }, { status: 500 });
  }
}
