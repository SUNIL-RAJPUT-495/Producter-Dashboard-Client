import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Fram from "../assets/fram.png";
import { Outlet } from "react-router-dom";


export const AuthLayout = () => {
    
 

  return (
    <Container
      fluid
      className="vh-100 p-0 overflow-hidden"
    >
      <Row className="h-100 g-0">
        
       {/* left image */}
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center h-100 bg-light"
        >
          <img
            src={Fram}
            alt="Login"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Col>

        {/* RIGHT FORM */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center h-100 bg-light " 
        >
          <Outlet />
        </Col>

      </Row>
    </Container>
  );
};
