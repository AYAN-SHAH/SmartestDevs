import connectToDatabase from '../../../lib/db';  // Database connection utility
import Quote from '../../../models/Quote';  // Import the Quote model

export async function POST(request) {
  try {
    const formData = await request.json();  // Get the parsed JSON body from the request
    console.log('Received quote form data:', formData);

    // Connect to the database
    await connectToDatabase();
    console.log('Database connected.');

    // Create a new Quote document
    const newQuote = new Quote(formData);

    // Save the quote to the database
    await newQuote.save();
    console.log('Quote saved to the database.');

    // Return a success response
    return new Response(JSON.stringify({ message: 'Quote request submitted successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error while submitting quote request:', error);
    return new Response(JSON.stringify({ message: 'Failed to submit quote request.', error: true }), { status: 500 });
  }
}
