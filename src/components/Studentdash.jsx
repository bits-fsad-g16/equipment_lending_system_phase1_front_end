import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const handleGoToEquipmentReq = () => {
    navigate("/equipmentreq");
  };

  const handleGoToLoanDetails = () => {
    navigate("/studentloan");
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Student Dashboard</h2>
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h4 className="mb-3">Student Profile</h4>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Class:</strong> 10th Grade</p>
          <p><strong>Register Number:</strong> STU1025</p>
        </Card.Body>
      </Card>

      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <h5>Equipment Request</h5>
              <p>Borrow or request lab equipment easily.</p>
              <Button variant="primary" onClick={handleGoToEquipmentReq}>
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <h5>Student Loan Details</h5>
              <p>Check the status of borrowed equipment and loans.</p>
              <Button variant="secondary" onClick={handleGoToLoanDetails}>
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentDashboard;
