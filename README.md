# Producter-Dashboard
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const InstructionsModal = () => {
  const [show, setShow] = useState(true); // page load me show hoga

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>How to Use Product Dashboard</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            <strong>Add Product:</strong> Click the "Add Products" button to upload a new product.
          </li>
          <li>
            <strong>Edit Product:</strong> Click "Edit" on a product card to update its details.
          </li>
          <li>
            <strong>Publish/Unpublish:</strong> Click "Publish" to make the product visible on Home. 
            Click again to unpublish.
          </li>
          <li>
            <strong>Delete Product:</strong> Click the delete icon to remove the product permanently.
          </li>
        </ul>
        <p style={{ fontSize: "12px", color: "#6c757d" }}>
          These instructions will help you manage your products easily.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShow(false)}>
          Got it!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

