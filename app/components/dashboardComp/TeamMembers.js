'use client'
import { Card, Table } from 'react-bootstrap';

export default function TeamMembers() {
  const members = [
    { name: 'Anita Parmar', role: 'Full-Stack Developer', lastActivity: 'Yesterday' },
    { name: 'Jitu Chauhan', role: 'UI Designer', lastActivity: '3 May, 2023' },
    { name: 'Sandeep Chauhan', role: 'Account Manager', lastActivity: '3 May, 2023' },
  ];

  return (
    <Card className="shadow">
      <Card.Header>Teams</Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
