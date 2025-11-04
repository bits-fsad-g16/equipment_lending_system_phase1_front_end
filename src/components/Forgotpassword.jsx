import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function Forgotpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your registered email address.");
      return;
    }

  
    console.log("Password reset link sent to:", email);
    alert("A password reset link has been sent to your email address.");
    navigate("/"); 
  };

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <Card style={{ width: "25rem" }} className="shadow-lg border-0">
        <Card.Body>
          <h3 className="text-center mb-4">Forgot Password</h3>
          <Form onSubmit={handleReset}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Registered Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary" type="submit" className="w-50 me-2">
                Reset Password
              </Button>
              <Button
                variant="outline-secondary"
                className="w-50"
                onClick={handleBackToLogin}
              >
                Back to Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Forgotpassword;
