'use client'
import { Card, Row, Col } from 'react-bootstrap';

export default function StatsCards() {
  const stats = [
    { title: 'Projects', count: '18', subtext: '2 Completed' },
    { title: 'Active Tasks', count: '132', subtext: '28 Completed' },
    { title: 'Teams', count: '12', subtext: '5% Completed' },
  ];

  return (
    <Row className="my-4">
      {stats.map((stat, index) => (
        <Col md={4} key={index} className="mb-3">
          <Card className="text-center shadow">
            <Card.Body>
              <h5>{stat.title}</h5>
              <h2>{stat.count}</h2>
              <p>{stat.subtext}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
