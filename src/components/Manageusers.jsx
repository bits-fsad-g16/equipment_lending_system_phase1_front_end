import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";

function ManageUsers() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users")) || [
      { id: 1, username: "student1", role: "Student" },
      { id: 2, username: "staff1", role: "Staff" },
      { id: 3, username: "admin", role: "Admin" },
    ];
    setUsers(stored);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updated = users.filter((u) => u.id !== id);
      setUsers(updated);
      localStorage.setItem("users", JSON.stringify(updated));
    }
  };

  const handleEdit = (id) => {
    const newRole = prompt("Enter new role (Student / Staff / Admin):");
    if (newRole) {
      const updated = users.map((u) =>
        u.id === id ? { ...u, role: newRole } : u
      );
      setUsers(updated);
      localStorage.setItem("users", JSON.stringify(updated));
    }
  };

  return (
    <Container className="py-5">
      <h3 className="text-center mb-4">Manage Users</h3>

      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-success">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    variant="outline-warning"
                    className="me-2"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default ManageUsers;
