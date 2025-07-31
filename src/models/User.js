import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  password: String,
  phone: String,
  address: String,
  country: { type: String },
  isDisabled: { type: Boolean, default: false },
  isSuspended: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ['super-admin', 'admin', 'client', 'agent', 'employee'],
    default: 'client',
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  profileImageUrl: {
    type: String,
    default: null 
  },
  // resetToken: { type: String },
  // resetTokenExpiry: { type: Date },
  resetPasswordToken: String,
  resetPasswordExpire: Date,

}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;