import React from "react";
import { Form,InputGroup } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { NavLink  } from "react-router-dom";
import logo from "../assets/Frame 4 (2).png"
import { IoIosSearch } from "react-icons/io";

export const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#1D222B",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div><img src={logo} alt="logo" /></div>
      <br />

    <InputGroup className="mb-4">
  <InputGroup.Text>
    <IoIosSearch />
  </InputGroup.Text>
  <Form.Control placeholder="Search" />
</InputGroup>
 

      <nav className="d-flex flex-column gap-3">
        <NavLink
          to="home"
          className={({ isActive }) =>
            isActive ? "text-white fw-bold" : "text-light"
          }
          style={{ textDecoration: "none" }}
        >
          <GoHome className="me-2 mb-1" />
          Home
        </NavLink>

        <NavLink
          to="product"
          className={({ isActive }) =>
            isActive ? "text-white fw-bold" : "text-light"
          }
          style={{ textDecoration: "none" }}
        >
          <IoBagOutline className="me-2 mb-1" />
          Products
        </NavLink>
      </nav>
    </div>
  );
};
