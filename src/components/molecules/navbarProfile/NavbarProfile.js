import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function MyNavbar() {
  const logo = {
    width: "100px",
    height: "34px",
    left: "136px",
    top: "27px",
    background: "#4B1979",
  };
  return (
    <Navbar
      expand="lg"
      style={{
        borderBottom: "3px solid #EEEEEE",
      }}
    >
      <Container>
        <div className="logo"></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div style={logo} className="mt-2"></div>
          </Nav>
          <Navbar.Text>Lengkapi Info Akun</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
