import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

function RequestForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const equipmentName = location.state?.equipmentName || "Unknown Equipment";
  const [borrowDate, setBorrowDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!borrowDate || !returnDate || !studentName) {
      alert("Please fill all fields!");
      return;
    }

    const newRequest = {
      id: Date.now(),
      equipmentName,
      borrowDate,
      returnDate,
      requestedBy: studentName,
      status: "Pending",
    };

    const existing = JSON.parse(localStorage.getItem("equipmentRequests")) || [];
    existing.push(newRequest);
    localStorage.setItem("equipmentRequests", JSON.stringify(existing));

    alert("Request submitted successfully!");

    setStudentName("");
    setBorrowDate("");
    setReturnDate("");

    navigate("/student/dashboard");
  };

  return (
    <Container className="py-5 d-flex justify-content-center align-items-center">
      <Card style={{ width: "30rem" }} className="shadow-sm border-0">
        <Card.Body>
          <h4 className="text-center mb-4">Equipment Request Form</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Equipment Name</Form.Label>
              <Form.Control type="text" value={equipmentName} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Borrow Date</Form.Label>
              <Form.Control
                type="date"
                value={borrowDate}
                onChange={(e) => setBorrowDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
            </Form.Group>

            <div className="text-center mt-4">
              <Button variant="primary" type="submit">
                Submit Request
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RequestForm;
