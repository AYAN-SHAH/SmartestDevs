import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import connectDB from '../../../lib/db';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'smartest'; // Ensure this is stored in your .env

export async function POST(req) {
  await connectDB(); // Connect to the database

  try {
    // Get the data from the request body
    const { username, email, password } = await req.json();

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return NextResponse.json(
        { message: 'Username or email already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create and save the user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    // Return a success response with the token
    return NextResponse.json(
      { message: 'User created successfully', token },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving user:', error);

    // Handle any errors during the process
    return NextResponse.json(
      { message: 'Error saving user to database' },
      { status: 500 }
    );
  }
}
