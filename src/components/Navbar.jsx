import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AppNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) setRole(savedRole);
  }, []);

  const handleHomeClick = () => {
    if (role === "student") {
      navigate("/student/dashboard");
    } else if (role === "staff") {
      navigate("/staff/dashboard");
    } else if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand className="ms-3 fs-5 fw-semibold">
          School Management System
        </Navbar.Brand>

        <Nav className="ms-auto me-3">

          <Button
            variant="outline-light"
            onClick={handleLogoutClick}
            className="fw-semibold px-4"
          >
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
