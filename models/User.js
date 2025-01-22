import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,  // Ensure username is unique
      trim: true,
      minlength: 3,  // You can set a minimum length for the username
      maxlength: 50,  // You can set a maximum length for the username
    },
    email: {
      type: String,
      required: true,
      unique: true,  // Ensure email is unique
      lowercase: true, // Convert email to lowercase
      trim: true,  // Remove leading and trailing whitespaces
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email'], // Email regex validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6,  // Minimum length for password
    },
  },
  { timestamps: true } // This will automatically add createdAt and updatedAt fields
);

// Create a Mongoose model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
