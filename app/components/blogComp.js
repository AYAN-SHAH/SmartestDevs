"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const blogComp = () => {
  // const posts = [
  //   { id: 1, title: 'How to Get Started with Next.js 15', date: 'January 10, 2025', summary: 'Learn the basics of Next.js 15 with this comprehensive guide.' },
  //   { id: 2, title: 'Top 5 Tips for Responsive Web Design', date: 'January 5, 2025', summary: 'Master responsive web design with these expert tips.' },
  //   { id: 3, title: 'Using Bootstrap in Next.js for Professional Designs', date: 'December 25, 2024', summary: 'Discover how Bootstrap can elevate your Next.js projects.' },
  // ];
  const [posts, setPosts] = useState([]);

  // Fetching blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/listBlog"); // Replace with your actual API endpoint
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        console.log(data);
        setPosts(data.blogs); // Assuming the API returns an array of blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="container my-4">
        <div className="row">
          {/* Carousel Section - Large Image */}
          <div className="col-md-7 mb-4">
            <div
              id="blogCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="link-to-blog-1">
                    <img
                      src="https://placehold.co/600x400"
                      className="d-block w-100"
                      alt="First Slide"
                    />
                    <div className="carousel-caption">
                      <h5>Uncategorized</h5>
                      <p>Mobile Application</p>
                    </div>
                  </a>
                </div>
                <div className="carousel-item">
                  <a href="link-to-blog-2">
                    <img
                      src="https://placehold.co/600x400"
                      className="d-block w-100"
                      alt="Second Slide"
                    />
                    <div className="carousel-caption">
                      <h5>Uncategorized</h5>
                      <p>اsoftware Development</p>
                    </div>
                  </a>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#blogCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#blogCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* Right-side Blog Posts */}
          <div className="col-md-5">
            <div className="row">
              <div className="col-6 mb-3">
                <a href="link-to-blog-3">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/200x200"
                      className="img-fluid"
                      alt="Lifestyle"
                    />
                    <div className="overlay position-absolute bottom-0 start-0 p-3 bg-dark text-white">
                      <h6 className="mb-0">Lifestyle</h6>
                      <p className="mb-0">Focused Effort: The Key to Success</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 mb-3">
                <a href="link-to-blog-4">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/200x200"
                      className="img-fluid"
                      alt="Travel"
                    />
                    <div className="overlay position-absolute bottom-0 start-0 p-3 bg-dark text-white">
                      <h6 className="mb-0">Travel</h6>
                      <p className="mb-0">You should enjoy with your friends</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 mb-3">
                <a href="link-to-blog-5">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/200x200"
                      className="img-fluid"
                      alt="Fashion"
                    />
                    <div className="overlay position-absolute bottom-0 start-0 p-3 bg-dark text-white">
                      <h6 className="mb-0">Fashion</h6>
                      <p className="mb-0">
                        Blue is what most women liked about
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 mb-3">
                <a href="link-to-blog-5">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/200x200"
                      className="img-fluid"
                      alt="Fashion"
                    />
                    <div className="overlay position-absolute bottom-0 start-0 p-3 bg-dark text-white">
                      <h6 className="mb-0">Fashion</h6>
                      <p className="mb-0">
                        Blue is what most women liked about
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h6>Software Development </h6>
      </div>

      <main className="container my-5">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={post.image || "https://placehold.co/300x200"}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h4 className="card-title text-dark pt-3">{post.title}</h4>
                  <p className="card-text">
                    <small className="text-muted">{post.publishedDate}</small>
                  </p>
                  <p className="card-text">
                    <strong>Author:</strong> {post.author || "Unknown"}
                  </p>
                  <p className="card-text">
                    {post.summary
                      ? post.summary.split(" ").length > 30
                        ? `${post.summary.split(" ").slice(0, 30).join(" ")}...`
                        : post.summary
                      : "No summary available."}
                  </p>

                  <Link href={`/blogs/${encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, "-"))}`} legacyBehavior>
  <a
    className="btn text-light"
    style={{ backgroundColor: "#0e2354" }}
  >
    Read More
  </a>
</Link>


                  {/* <Link href={`/blogs/${post.id}`} legacyBehavior>
                    <a
                      className="btn text-light"
                      style={{ backgroundColor: "#0e2354" }}
                    >
                      Read More
                    </a>
                  </Link> */}

                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default blogComp;
