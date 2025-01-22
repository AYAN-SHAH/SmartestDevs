import { Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function TasksPerformance() {
  const data = {
    labels: ['Completed', 'In-Progress', 'Behind'],
    datasets: [
      {
        data: [76, 32, 13],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  };

  return (
    <Card className="shadow">
      <Card.Header>Tasks Performance</Card.Header>
      <Card.Body>
        <Doughnut data={data} />
      </Card.Body>
    </Card>
  );
}
