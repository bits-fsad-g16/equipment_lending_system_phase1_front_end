import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Staffdash() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Staff Dashboard</h2>

      <Row className="g-4 justify-content-center">
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center">
              <Card.Title>Approve Equipment Requests</Card.Title>
              <Card.Text>
              Approve pending requests from students.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/approval")}
              >
                Go to Approvals
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center">
              <Card.Title>Track Requests</Card.Title>
              <Card.Text>
                View all active and returned equipment requests.
              </Card.Text>
              <Button
                variant="warning"
                onClick={() => navigate("/student/tracking")}
              >
                View Tracking
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Staffdash;
