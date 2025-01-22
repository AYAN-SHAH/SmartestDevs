import dbConnect from "../../../lib/db"; // Utility to connect to MongoDB
import Subscriber from "../../../models/Subscriber"; // Subscriber model

export async function POST(req) {
  try {
    console.log("Connecting to the database...");
    await dbConnect(); // Ensure database connection
    console.log("Database connected successfully.");

    const body = await req.json(); // Parse the request body
    console.log("Request body parsed:", body);

    const { email, phoneNumber1, phoneNumber2 = "", website } = body; // Destructure input
    console.log("Creating a new subscriber with the following data:", {
      email,
      phoneNumber1,
      phoneNumber2,
      website,
    });

    // Create a new subscriber
    const newSubscriber = await Subscriber.create({
      email,
      phoneNumber1,
      phoneNumber2,
      website,
    });

    console.log("Subscriber created successfully:", newSubscriber);

    return new Response(
      JSON.stringify({
        message: "Subscriber added successfully",
        subscriber: newSubscriber,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while adding subscriber:", error.message);
    return new Response(
      JSON.stringify({
        error: "Failed to add subscriber",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    console.log("Connecting to the database...");
    await dbConnect(); // Ensure database connection
    console.log("Database connected successfully.");

    console.log("Fetching all subscribers...");
    // Fetch all subscribers
    const subscribers = await Subscriber.find();

    console.log("Subscribers fetched successfully:", subscribers);

    return new Response(
      JSON.stringify({
        message: "Subscribers fetched successfully",
        subscribers,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while fetching subscribers:", error.message);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch subscribers",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
