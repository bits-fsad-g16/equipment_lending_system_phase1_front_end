import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

function Approval() {
  const [requests, setRequests] = useState([]);


  useEffect(() => {
    const loadRequests = () => {
      const stored = JSON.parse(localStorage.getItem("equipmentRequests")) || [];
      setRequests(stored);
    };

    loadRequests(); 

    const interval = setInterval(loadRequests, 2000); 
    return () => clearInterval(interval); 
  }, []);

 
  const handleAction = (id, action) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: action } : req
    );

    setRequests(updated);
    localStorage.setItem("equipmentRequests", JSON.stringify(updated));
  };

  return (
    <Container className="py-5">
      <h3 className="text-center mb-4">Pending Equipment Requests</h3>

      {requests.length === 0 ? (
        <p className="text-center">No pending requests found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Equipment Name</th>
              <th>Requested By</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={req.id}>
                <td>{index + 1}</td>
                <td>{req.equipmentName}</td>
                <td>{req.requestedBy}</td>
                <td>{req.borrowDate}</td>
                <td>{req.returnDate}</td>
                <td>{req.status}</td>
                <td className="text-center">
                  {req.status === "Pending" ? (
                    <>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={() => handleAction(req.id, "Approved")}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleAction(req.id, "Rejected")}
                      >
                        Reject
                      </Button>
                    </>
                  ) : (
                    <strong
                      className={
                        req.status === "Approved"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {req.status}
                    </strong>
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

export default Approval;
