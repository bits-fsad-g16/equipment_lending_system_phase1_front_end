import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Table } from "react-bootstrap";

function Manageequipments() {   
  const [equipments, setEquipments] = useState([]);
  const [newEquipment, setNewEquipment] = useState("");

  useEffect(() => {
    const savedEquipments =
      JSON.parse(localStorage.getItem("equipmentsList")) || [];
    setEquipments(savedEquipments);
  }, []);

  useEffect(() => {
    localStorage.setItem("equipmentsList", JSON.stringify(equipments));
  }, [equipments]);

  const handleAddEquipment = () => {
    if (!newEquipment.trim()) return alert("Enter equipment name!");
    const newEq = { id: Date.now(), name: newEquipment };
    setEquipments([...equipments, newEq]);
    setNewEquipment("");
  };

  const handleDelete = (id) => {
    setEquipments(equipments.filter((eq) => eq.id !== id));
  };

  const handleEdit = (id) => {
    const updatedName = prompt("Enter new name:");
    if (updatedName) {
      setEquipments(
        equipments.map((eq) =>
          eq.id === id ? { ...eq, name: updatedName } : eq
        )
      );
    }
  };

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm border-0">
        <h3 className="mb-4 text-center">Manage Equipment</h3>

        <Form className="d-flex mb-3">
          <Form.Control
            type="text"
            placeholder="Enter equipment name"
            value={newEquipment}
            onChange={(e) => setNewEquipment(e.target.value)}
          />
          <Button
            variant="primary"
            className="ms-2"
            onClick={handleAddEquipment}
          >
            Add
          </Button>
        </Form>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Equipment Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipments.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No equipment added yet
                </td>
              </tr>
            ) : (
              equipments.map((eq, index) => (
                <tr key={eq.id}>
                  <td>{index + 1}</td>
                  <td>{eq.name}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(eq.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(eq.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default Manageequipments; 
