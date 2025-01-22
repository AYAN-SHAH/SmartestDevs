'use client'
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../components/dashboardComp/Sidebar';
import StatsCards from '../../components/dashboardComp/StatsCards';
import ProjectsTable from '../../components/dashboardComp/ProjectsTable';
import TasksPerformance from '../../components/dashboardComp/TaskPerformance';
import TeamMembers from '../../components/dashboardComp/TeamMembers';

export default function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block">
          <Sidebar />
        </Col>
        <Col md={10} xs={12}>
          <StatsCards />
          <ProjectsTable />
          <Row className="mt-4">
            <Col md={6}>
              <TasksPerformance />
            </Col>
            <Col md={6}>
              <TeamMembers />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
