import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Axios from "../../utils/Axios";
import SummaryApi from "../../common/SummaryApi";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setuserData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios({
        url: SummaryApi.Register.url,
        method: SummaryApi.Register.method,
        data:{userData},
      });
      
       if (res.data.success) {
       navigate("/otp-verification", 
        { state: { userData } });
      }
      console.log(userData)
    }  catch (error) {
      console.log(error.response?.data || error);
    }
  };

  return (
    <Form style={{ width: "80%", maxWidth: "400px" }} onSubmit={handleSubmit}>
      <h3 className="mb-4 text-center" style={{ color: "#071074" }}>
        Login to your Productr Account
      </h3>

      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Email or Phone number</Form.Label>
        <Form.Control
          onChange={(e) => setuserData(e.target.value)}
          type="text"
          placeholder="Enter email or phone number"
        />
      </Form.Group>

      <Button disabled={!userData}
        type="submit"
        className="w-100 fw-bold"
        style={{ backgroundColor: "#071074", borderColor: "#071074" }}
      >
        Login
      </Button>
    </Form>
  );
};
