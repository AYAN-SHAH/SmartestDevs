'use client'
import { Card, Table, ProgressBar, Badge } from 'react-bootstrap';

export default function ProjectsTable() {
  const projects = [
    { name: 'Dropbox Design System', hours: 34, priority: 'Medium', progress: 15 },
    { name: 'Slack Team UI Design', hours: 47, priority: 'High', progress: 35 },
    { name: 'GitHub Satellite', hours: 120, priority: 'Low', progress: 75 },
    { name: '3D Character Modelling', hours: 89, priority: 'Medium', progress: 45 },
  ];

  return (
    <Card className="shadow my-4">
      <Card.Header>Active Projects</Card.Header>
      <Card.Body>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Hours</th>
              <th>Priority</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.hours}</td>
                <td>
                  <Badge bg={project.priority.toLowerCase()}>{project.priority}</Badge>
                </td>
                <td>
                  <ProgressBar now={project.progress} label={`${project.progress}%`} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
