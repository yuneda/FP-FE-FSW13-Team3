import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function MyNavbar2(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const notDesktop = useMediaQuery({ query: "(max-width: 991px)" });
  const colorActive = {
    color: "#7126B5",
  };
  const colorInactive = {
    color: "black",
  };
  const btnStyle = {
    background: "#7126B5",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "white",
  };
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
      <Container fluid>
        <div className="logo"></div>
        <Navbar.Toggle
          aria-controls={
            // notDesktop ? `offcanvasNavbar-expand-lg` : '"navbarScroll"'
            notDesktop ? `offcanvasNavbar-expand-lg` : '"navbarScroll"'
          }
        />
        {!notDesktop && (
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div style={logo} className="mt-2"></div>
              <div className="ms-3 search-input d-flex justify-content-between">
                <input
                  className="user-input"
                  placeholder="Cari di sini .."
                  type="text"
                  value={props.search}
                  onChange={props.handleSearch}
                  style={{
                    border: "none",
                    background: "none",
                    width: "400px",
                  }}
                />
                <button onClick={props.handleSubmitSearch}>
                  <i className="fa-solid fa-magnifying-glass me-2"></i>
                </button>
              </div>
            </Nav>
            {props.token && props.tokenExpired && (
              <Link to="/login">
                <button style={btnStyle}>
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Masuk
                </button>
              </Link>
            )}
            {!props.token && (
              <Link to="/login">
                <button style={btnStyle}>
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Masuk
                </button>
              </Link>
            )}
            {props.token && !props.tokenExpired && (
              <>
                <Link to="/product">
                  <div style={colorInactive}>
                    <i className="fa-solid fa-list-ul me-3"></i>
                  </div>
                </Link>
                <div
                  onClick={props.onToggleClick}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-regular fa-bell me-3 text-black"></i>
                </div>
                <div
                  onClick={props.onToggleMenu}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-regular fa-user text-black"></i>
                </div>
              </>
            )}
          </Navbar.Collapse>
        )}
        {notDesktop && (
          <div className="w-50">
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand-expand`}
              placement="start"
              className="w-50"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-expand`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-expand`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default MyNavbar2;
