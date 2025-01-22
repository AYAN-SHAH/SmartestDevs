'use client'
import { ListGroup } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <div className="sidebar bg-dark text-light p-3">
      <h5 className="mb-4">Dash UI</h5>
      <ListGroup variant="flush">
        <ListGroup.Item action href="#dashboard" className="text-light bg-dark">
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item action href="#pages" className="text-light bg-dark">
          Pages
        </ListGroup.Item>
        <ListGroup.Item action href="#components" className="text-light bg-dark">
          UI Components
        </ListGroup.Item>
        <ListGroup.Item action href="#docs" className="text-light bg-dark">
          Documentation
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
