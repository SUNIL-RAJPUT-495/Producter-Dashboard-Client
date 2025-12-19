import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "../../utils/Axios";
import SummaryApi from "../../common/SummaryApi";

export const OtpVerification = () => {
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState(false);

  /* Redirect if userData missing */
  useEffect(() => {
    if (!userData) navigate("/login");
  }, [userData, navigate]);

  /* Handle typing */
  const handleChange = (e, index) => {
    const value = e.target.value;
    setOtpError(false);

    if (/^[0-9]$/.test(value)) {
      inputsRef.current[index].value = value;
      if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      inputsRef.current[index].value = "";
    }
  };

  /* Handle backspace */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (e.target.value === "" && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  /* Submit OTP */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const otp = inputsRef.current.map((input) => input.value).join("");

    if (otp.length !== 6) {
      setOtpError(true);
      return;
    }

    setLoading(true);

    try {
      const res = await Axios({
        url: SummaryApi.OtpVerification.url,
        method: SummaryApi.OtpVerification.method,
        data: { userData, otp },
      });

      if (res.data.success) {
        navigate("/dashboard");
      } else {
        setOtpError(true);
      }
    } catch (error) {
      setOtpError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form style={{ width: "80%", maxWidth: "400px" }} onSubmit={handleSubmit}>
      <h3 className="mb-4 text-center" style={{ color: "#071074" }}>
        OTP Verification
      </h3>

      <p className="fw-bold text-center mb-3">
        Enter the 6-digit OTP sent to <br />
        <span style={{ color: "#071074" }}>{userData}</span>
      </p>

      <div className="d-flex justify-content-between mb-2">
        {[...Array(6)].map((_, i) => (
          <Form.Control
            key={i}
            type="text"
            maxLength="1"
            ref={(el) => (inputsRef.current[i] = el)}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="text-center"
            style={{
              width: "40px",
              height: "50px",
              fontSize: "24px",
              border: otpError ? "2px solid red" : "1px solid #ced4da",
            }}
          />
        ))}
      </div>

      {otpError && (
        <p
          className="text-danger text-center mb-3"
          style={{ fontSize: "14px" }}
        >
          Please enter a valid OTP
        </p>
      )}

      <Button
        type="submit"
        className="w-100 fw-bold"
        style={{ backgroundColor: "#071074", borderColor: "#071074" }}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </Button>
    </Form>
  );
};
