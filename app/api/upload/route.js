import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Image from "@/models/Image";
import upload from "@/lib/multer";
import { promisify } from "util";

// Convert multer middleware to a promise
const multerMiddleware = promisify(upload.single("image"));

export async function POST(req) {
  await connectToDatabase();

  try {
    // Parse the form data with multer
    const form = new FormData();
    req.formData = await req.formData();
    await multerMiddleware(req, null);

    // Get file details
    const { file } = req;
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Save the image details to the database
    const newImage = new Image({
      filename: file.filename,
      filepath: `/uploads/${file.filename}`,
    });
    await newImage.save();

    return NextResponse.json({
      message: "Image uploaded successfully",
      image: newImage,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload image", details: error.message },
      { status: 500 }
    );
  }
}
