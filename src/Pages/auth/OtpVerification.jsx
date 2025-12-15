import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const OtpVerification = () => {
  const inputsRef = useRef([]);
  const navigation = useNavigate()

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      e.target.value = value;
      if (index < 5) inputsRef.current[index + 1].focus();
    } else {
      e.target.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("/Dashboard")
  };
  return (
    <Form style={{ width: "80%", maxWidth: "400px" }} onSubmit={handleSubmit}>
      <h3 className="mb-4 text-center" style={{ color: "#071074" }}>
        Login to your Productr Account
      </h3>
      <p className="fw-bold">Enter OTP</p>

      <div className="d-flex justify-content-between mb-4">
        {[...Array(6)].map((_, i) => (
          <Form.Control
            key={i}
            type="text"
            maxLength="1"
            ref={(el) => (inputsRef.current[i] = el)}
            onChange={(e) => handleChange(e, i)}
            className="text-center"
            style={{
              width: "40px",
              height: "50px",
              fontSize: "24px",
              marginRight: i < 5 ? "10px" : "0",
            }}
          />
        ))}
      </div>

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
