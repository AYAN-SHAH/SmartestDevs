"use client"
import React, { useState } from 'react';
import BusinessSubscriberForm from './subscriberForm';
import SubscriberTable from './subscriberTable';
import { Col, Container, Row } from 'react-bootstrap';

const SubscriberMain = () => {
  const [subscribers, setSubscribers] = useState([]);

  const handleFormSubmit = (subscriberData) => {
    setSubscribers([...subscribers, subscriberData]);
  };

  const handleDelete = (index) => {
    setSubscribers(subscribers.filter((_, i) => i !== index));
  };

  return (
    <div>
        <Container>
            <Row>
                <Col md={6}>
      <BusinessSubscriberForm onSubmit={handleFormSubmit} />
      </Col>
      <Col md={6}>
      <SubscriberTable subscribers={subscribers} handleDelete={handleDelete} />
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default SubscriberMain;
