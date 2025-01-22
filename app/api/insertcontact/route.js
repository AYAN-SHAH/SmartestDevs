import connectMongoDB from "../../../lib/db";
import Contact from "../../../models/Contact";

export async function POST(request) {
  try {
    await connectMongoDB();

    const body = await request.json();
    const newContact = new Contact(body);

    await newContact.save();
    return new Response(
      JSON.stringify({ message: "Contact saved successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to save contact" }), {
      status: 500,
    });
  }
}
