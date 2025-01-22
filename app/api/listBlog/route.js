import connectMongoDB from "../../../lib/db";
import Blog from "../../../models/Blog";

export async function GET(request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch all blogs from the database
    const blogs = await Blog.find({}); // Sort by published date, descending

    // Return the fetched blogs as a JSON response
    console.log(blogs);
    return new Response(JSON.stringify({ blogs }), { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching blogs", error }),
      { status: 500 }
    );
  }
}
