"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Container, Spinner } from "react-bootstrap";

const SubscriberTable = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch subscribers from the API
  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/addSubscriber", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch subscribers");
      }

      const data = await response.json();
      setSubscribers(data.subscribers || []);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Handle delete subscriber
  const handleDelete = async (index) => {
    const subscriberToDelete = subscribers[index];

    try {
      const response = await fetch(
        `/api/deleteSubscriber/${subscriberToDelete._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete subscriber");
      }

      // Remove the deleted subscriber from the list
      setSubscribers((prevSubscribers) =>
        prevSubscribers.filter((_, i) => i !== index)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch subscribers when the component mounts
  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Subscriber List</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length > 0 ? (
              subscribers.map((subscriber, index) => (
                <tr key={subscriber._id}>
                  <td>{index + 1}</td>
                  <td>{subscriber.email}</td>
                  <td>{subscriber.phoneNumber1}</td>
                  <td>{subscriber.website}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default SubscriberTable;
