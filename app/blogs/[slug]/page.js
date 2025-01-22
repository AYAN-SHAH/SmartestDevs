// app/blogs/[id]/page.js
"use client";
import { useEffect, useState } from "react";

const BlogPost = ({ params }) => {
  const [post, setPost] = useState(null);



  const { slug } = params; // Assuming your route is now /blogs/[slug]

  useEffect(() => {
    if (!slug) return;
  
    const fetchPost = async () => {
      const res = await fetch(`/api/getSingleBlogById?slug=${encodeURIComponent(slug)}`);
      const data = await res.json();
      console.log(data);
      setPost(data);
    };
  
    fetchPost();
  }, [slug]);
  


  // const { id } = params; // Directly destructure the params
  // console.log(id);

  // useEffect(() => {
  //   if (!id) return;

  //   const fetchPost = async () => {
  //     // Append the id to the URL correctly
  //     const res = await fetch(`/api/getSingleBlogById?id=${id}`);
  //     const data = await res.json();
  //     console.log(data);
  //     setPost(data);
  //   };

  //   fetchPost();
  // }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <h1>{post.title}</h1>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Published Date:</strong>{" "}
        {new Date(post.publishedDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Categories:</strong> {post.categories}
      </p>
      <p>
        <strong>Summary:</strong> {post.summary}
      </p>
      <p>{post.content}</p>

      {/* Display image if available */}
      {post.image && (
        <div>
          <img src={post.image} alt={post.title} style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default BlogPost;
