import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import connectDB from '../../../lib/db';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'smartest'; // Ensure this is stored in your .env

export async function POST(req) {
  await connectDB();

  try {
    // Get the data from the request body
    const { email, password } = await req.json();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    // Return a success response with the token
    return NextResponse.json(
      { message: 'Login successful', token },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error logging in:', error);

    // Handle any errors during the process
    return NextResponse.json(
      { message: 'Error during login' },
      { status: 500 }
    );
  }
}
