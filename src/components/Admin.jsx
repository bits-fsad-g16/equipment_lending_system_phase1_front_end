import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <Row className="g-4 justify-content-center">
        {/* Manage Equipment */}
        <Col md={4}>
          <Card className="shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title>Manage Equipment</Card.Title>
              <Card.Text>Add, edit, or remove lab equipment.</Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/manageequipment")}
              >
                Go to Equipment
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Manage Users */}
        <Col md={4}>
          <Card className="shadow-sm border-0 text-center">
            <Card.Body>
              <Card.Title>Manage Users</Card.Title>
              <Card.Text>View, edit, or delete system users.</Card.Text>
              <Button
                variant="success"
                onClick={() => navigate("/admin/manageusers")}
              >
                Go to Users
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
