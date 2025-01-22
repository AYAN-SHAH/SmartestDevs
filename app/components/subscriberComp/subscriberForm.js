"use client";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const SubscriberForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber1: "",
    phoneNumber2: "", // default is empty string
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set phoneNumber2 to an empty string if not provided
    const dataToSend = {
      ...formData,
      phoneNumber2: formData.phoneNumber2 || "", // If phoneNumber2 is empty, default it to ""
    };

    console.log("Form Data Submitted:", dataToSend);

    // Add your API call here to send `dataToSend` to the server (MongoDB)
    try {
      const response = await fetch("/api/addSubscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Subscription successful");
        alert("Subscription successful!"); // Show success alert

        // Reset the form fields
        setFormData({
          email: "",
          phoneNumber1: "",
          phoneNumber2: "",
          website: "",
        });
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Subscription Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs="12" sm="12" md="6">
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </Form.Group>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Form.Group controlId="phoneNumber1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" md="6">
            <Form.Group className="mb-3" controlId="phoneNumber2">
              <Form.Label>Phone Number 2 (optional)</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                placeholder="Additional information or notes"
              />
            </Form.Group>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Form.Group className="mb-3" controlId="website">
              <Form.Label>Website (optional)</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter website URL"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="w-100">
          Subscribe
        </Button>
      </Form>
    </Container>
  );
};

export default SubscriberForm;
