import React, { useEffect, useState } from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";

function Tracking() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("equipmentRequests")) || [];
    setRequests(stored);
  }, []);
  
  const handleReturn = (id) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: "Returned" } : req
    );
    setRequests(updated);
    localStorage.setItem("equipmentRequests", JSON.stringify(updated));
  };

  return (
    <Container className="py-5">
      <h3 className="text-center mb-4">Equipment Tracking</h3>

      {requests.length === 0 ? (
        <p className="text-center text-muted">No equipment requests found.</p>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Equipment Name</th>
              <th>Borrowed Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req, index) => (
              <tr key={req.id}>
                <td>{index + 1}</td>
                <td>{req.requestedBy}</td>
                <td>{req.equipmentName}</td>
                <td>{req.borrowDate}</td>
                <td>{req.returnDate}</td>
                <td>
                  <Badge
                    bg={
                      req.status === "Approved"
                        ? "success"
                        : req.status === "Returned"
                        ? "secondary"
                        : req.status === "Pending"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {req.status}
                  </Badge>
                </td>
                <td className="text-center">
                  {req.status === "Approved" ? (
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => handleReturn(req.id)}
                    >
                      Mark Returned
                    </Button>
                  ) : req.status === "Returned" ? (
                    <span className="text-muted">Returned</span>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Tracking;
