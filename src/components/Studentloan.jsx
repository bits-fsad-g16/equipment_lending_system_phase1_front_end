import React, { useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";

function Studentloan() {
  // Dummy data
  const [loans] = useState([
    {
      id: 1,
      name: "John Doe",
      registerNo: "STU1025",
      loanDetail: "Laptop borrowed for project work",
      status: "Pending",
    },
    {
      id: 2,
      name: "John Doe",
      registerNo: "STU1025",
      loanDetail: "Microscope borrowed for lab experiment",
      status: "Paid",
    },
  ]);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Student Loan Details</h2>

      <Row className="justify-content-center">
        <Col md={10}>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>Student Name</th>
                <th>Register Number</th>
                <th>Loan Detail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.name}</td>
                  <td>{loan.registerNo}</td>
                  <td>{loan.loanDetail}</td>
                  <td
                    className={
                      loan.status === "Paid" ? "text-success" : "text-danger"
                    }
                  >
                    {loan.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Studentloan;
