import connectMongoDB from "../../../lib/db";
import Blog from "../../../models/Blog";

export async function POST(request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse the incoming JSON body
    const { title, summary, content, categories, image } = await request.json();

    // Get the last blog to generate the next `id`
    const lastBlog = await Blog.findOne().sort({ id: -1 }).limit(1);
    const newId = lastBlog && lastBlog.id ? lastBlog.id + 1 : 1; // Set ID to 1 if no last blog is found

    // Create the new blog post
    const newBlog = new Blog({
      id: newId,
      title,
      summary,
      content,
      categories,
      image, // Only the file path (not the actual file)
      author: "admin",
      publishedDate: Date.now(),
    });

    // Save the new blog to the database
    await newBlog.save();

    // Send success response
    return new Response(
      JSON.stringify({ message: "Blog created successfully", blog: newBlog }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return new Response(
      JSON.stringify({ message: "Error creating blog", error }),
      { status: 500 }
    );
  }
}
