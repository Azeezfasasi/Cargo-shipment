import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json({ message: 'All fields are required' }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // You can choose to return a cookie or just the token
    return Response.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
