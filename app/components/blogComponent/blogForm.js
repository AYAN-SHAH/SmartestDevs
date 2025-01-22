"use client";
import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row, Container, Table } from "react-bootstrap";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    categories: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = {
        ...formData,
        image: formData.image ? formData.image : null, // You can send the image path or URL here
      };

      const response = await fetch("/api/addBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Blog created successfully");
      } else {
        alert("Error creating blog: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating blog");
    }
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/listBlog"); // Assuming this is the correct API route
        const data = await response.json();

        if (response.ok) {
          setBlogs(data.blogs);
        } else {
          setError(data.message || "Failed to fetch blogs");
        }
      } catch (error) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container>
      <Row>
        <Col
          md={6}
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
            borderRadius: "8px",
            backgroundColor: "#fff",
            marginBottom: "1.5rem",
          }}
        >
          <h2 className="mt-5">Create a Blog Post</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formSummary">
                <Form.Label>Short Description</Form.Label>
                <Form.Control
                  type="text"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formCategories">
                <Form.Label>Categories</Form.Label>
                <Form.Control
                  type="text"
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formContent">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col
          md={6}
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
            borderRadius: "8px",
            backgroundColor: "#fff",
            marginBottom: "1.5rem",
          }}
        >
          <h2 className="mt-5">Blog List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Summary</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={index}>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.categories}</td>
                  <td>
                    {blog.image && (
                      <img
                        src={blog.image}
                        alt="Blog"
                        style={{ width: "50px" }}
                      />
                    )}
                  </td>
                  <td>
                    <Button variant="info" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
