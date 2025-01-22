// app/api/getSingleBlogById/route.js
import connectToDatabase from "../../../lib/db"; // MongoDB connection
import Blog from "../../../models/Blog"; // Assuming Blog model

// export async function GET(req) {
//   const url = new URL(req.url);
//   const id = url.searchParams.get("id"); // Get the id from query parameters
//   console.log(id);
//   try {
//     // Connect to the database
//     await connectToDatabase();

//     // Fetch the blog by its ID
//     const post = await Blog.findOne({ id: id });

//     if (!post) {
//       return new Response(JSON.stringify({ message: "Blog post not found" }), {
//         status: 404,
//       });
//     }
//     console.log(post);
//     // Return the blog post
//     return new Response(JSON.stringify(post), { status: 200 });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ message: "Error fetching the blog post" }),
//       { status: 500 }
//     );
//   }
// }

export async function GET(req) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug"); // Get the slug from query parameters
  console.log(slug);
  try {
    await connectToDatabase();

    // Fetch the blog by slug (assuming slug is stored or derived from the title)
    const post = await Blog.findOne({ title: new RegExp(slug.replace(/-/g, " "), "i") });
    console.log(post)
    if (!post) {
      return new Response(JSON.stringify({ message: "Blog post not found" }), {
        status: 404,
      });
    }
    
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching the blog post" }),
      { status: 500 }
    );
  }
}
