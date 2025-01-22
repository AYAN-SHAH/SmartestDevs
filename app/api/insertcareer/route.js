import connectToDatabase from '../../../lib/db';  // DB connection utility
import Career from '../../../models/Career';
import multer from 'multer';
import path from 'path';

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');  // Save files to the "uploads" directory
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// API Route to handle the POST request
export async function POST(request) {
  const formData = await request.formData();

  try {
    // Handle file upload
    const resumeFile = formData.get('Resume');
    if (resumeFile) {
      const filePath = `/uploads/${resumeFile.name}`;  // Set the file path or URL
      formData.set('Resume', filePath);  // Save file path instead of the File object
    }

    const data = {
      DesignationId: formData.get('DesignationId'),
      FullName: formData.get('FullName'),
      Email: formData.get('Email'),
      Phone: formData.get('Phone'),
      Resume: formData.get('Resume'),  // Save the file path in the database
      Description: formData.get('Description'),
    };

    console.log('Form data parsed:', data);

    await connectToDatabase();
    console.log('Database connected.');

    const career = new Career(data);
    await career.save();
    console.log('Career application saved to database.');

    return new Response(JSON.stringify({ message: 'Application submitted successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error while submitting application:', error);
    return new Response(JSON.stringify({ message: 'Failed to submit application.', error: true }), { status: 500 });
  }
}
