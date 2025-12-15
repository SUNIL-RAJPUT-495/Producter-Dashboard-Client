import {  Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/otp-verification");
  };

  return (
    <Form
      style={{ width: "80%", maxWidth: "400px" }}
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4 text-center" style={{ color: "#071074" }}>
        Login to your Productr Account
      </h3>

      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Email or Phone number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email or phone number"
        />
      </Form.Group>

      <Button
        type="submit"
        className="w-100 fw-bold"
        style={{ backgroundColor: "#071074", borderColor: "#071074" }}
      >
        Login
      </Button>
    </Form>
  );
};
