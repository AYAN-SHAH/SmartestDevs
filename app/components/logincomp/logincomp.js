"use client";
import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  // New state for loading
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when the request starts

    // Make API request to log in the user
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setLoading(false);  // Set loading to false when the request is complete
console.log(data)
    if (response.ok) {
      // Store the token in localStorage
      localStorage.setItem('userToken', data.token);
      // Redirect the user to a protected page or home
      location.replace("/admin/blog");
    } else {
      setError(data.message);  // Show error message
    }
  };

  return (
    <section className="p-3 p-md-4 p-xl-5">
      <Container>
        <Card className="border-light-subtle shadow-sm">
          <Row className="g-0">
            {/* Left Side with Image */}
            <Col md={6} className="d-flex align-items-center justify-content-center text-light">
              <div className="p-3 text-center">
                <img
                  className="img-fluid rounded mb-4"
                  loading="lazy"
                  src="./assets/img/bsb-logo-light.svg"
                  width="245"
                  height="80"
                  alt="BootstrapBrain Logo"
                />
              </div>
            </Col>
            {/* Right Side with Form */}
            <Col md={6}>
              <Card.Body className="p-3 p-md-4 p-xl-5">
                <Row>
                  <Col>
                    <div className="mb-5">
                      <h3>Log in</h3>
                    </div>
                  </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                  <Row className="gy-3 gy-md-4">
                    <Col md={12}>
                      <Form.Group controlId="email">
                        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="password">
                        <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    {error && <p className="text-danger">{error}</p>}
                    <Col>
                      <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        className="w-100"
                        disabled={loading}  // Disable button when loading
                      >
                        {loading ? 'Logging in...' : 'Log in now'}
                      </Button>
                    </Col>
                  </Row>
                </Form>
                
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  );
}

export default LoginPage;
