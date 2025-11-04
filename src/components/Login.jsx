import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  // ✅ Dummy user data
  const users = [
    { username: "student1", password: "stud123", role: "student" },
    { username: "staff1", password: "staff123", role: "staff" },
    { username: "admin1", password: "admin123", role: "admin" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Check credentials
    const user = users.find(
      (u) => u.username === username && u.password === password && u.role === role
    );

    if (user) {
      console.log("✅ Login successful:", user);
      localStorage.setItem("userRole", role);

      // ✅ Redirect based on role
      if (role === "student") {
        navigate("/student/dashboard");
      } else if (role === "staff") {
        navigate("/staff/dashboard");
      } else if (role === "admin") {
        navigate("/admin");
      }
    } else {
      alert("❌ Invalid username, password, or role");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <Card style={{ width: "24rem" }} className="shadow-lg border-0">
        <Card.Body>
          <h3 className="text-center mb-4">Login</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="role">
              <Form.Label>Login As</Form.Label>
              <Form.Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Button variant="primary" type="submit" className="w-50 me-2">
                Login
              </Button>
              <Button
                variant="outline-secondary"
                onClick={handleSignup}
                className="w-50"
              >
                Sign Up
              </Button>
            </div>

            <div className="text-center">
              <Button
                variant="link"
                className="text-decoration-none"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
