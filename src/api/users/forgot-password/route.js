import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    await dbConnect();
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ message: 'Email not found' }, { status: 404 });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = Date.now() + 1000 * 60 * 15; // 15 minutes

    await user.save();

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

    // Setup mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const message = {
      from: `"Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: 'Password Reset Request',
      html: `<p>You requested a password reset.</p>
             <p>Click <a href="${resetUrl}">here</a> to reset your password. This link is valid for 15 minutes.</p>`
    };

    await transporter.sendMail(message);

    return Response.json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Forgot password error:', error);
    return Response.json({ message: 'Failed to send reset email' }, { status: 500 });
  }
}
