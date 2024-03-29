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

function MyNavbar(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const notDesktop = useMediaQuery({ query: "(max-width: 991px)" });
  const mobileView = useMediaQuery({ query: "(max-width: 767px)" });
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
  const expand = "lg";
  return (
    <Navbar
      expand="md"
      style={{
        borderBottom: mobileView ? "none" : "3px solid #EEEEEE",
        position: mobileView ? "absolute" : "relative",
        zIndex: mobileView ? "2" : "0",
      }}
    >
      <Container>
        <div className="logo"></div>
        <Navbar.Toggle
          aria-controls={
            `offcanvasNavbar-expand-md`
            // mobileView ? `offcanvasNavbar-expand-md` : '"navbarScroll"'
          }
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "10px",
          }}
          onClick={handleShow}
        />
        {mobileView && (
          <form onSubmit={props.handleSubmitSearch}>
            <div
            className="ms-3 d-flex justify-content-between"
            style={{
              color: "#8a8a8a",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "2px 10px",
            }}
          >
            <input
              className="user-input"
              placeholder="Cari di sini .."
              type="text"
              value={props.search}
              onChange={props.handleSearch}
              style={{
                border: "none",
                background: "none",
                width: "180px",
              }}
            />
            <button
              type="submit"
              style={{
                background: "none",
              }}
            >
              <i className="fa-solid fa-magnifying-glass me-2"></i>
            </button>
            </div>
          </form>
        )}
        {!mobileView && (
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-md-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <div style={logo} className="mt-2"></div>
              </Link>
              <form onSubmit={props.handleSubmitSearch}>
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
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass me-2"></i>
                  </button>
                </div>
              </form>
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
        {mobileView && (
          <Offcanvas
            className="w-50"
            show={show}
            onHide={handleClose}
            {...props}
          >
            <Offcanvas.Header closeButton>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Offcanvas.Title>Secondhand</Offcanvas.Title>
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
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
                  <Link
                    to="/product"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div className="row nav-list">
                      <div className="col-2">
                        <i className="fa-solid fa-list-ul"></i>
                      </div>
                      <div className="col-8">
                        <p className="">Daftar Jual</p>
                      </div>
                    </div>
                    {/* <div style={colorInactive}>Daftar Jual</div> */}
                  </Link>
                  <Link
                    to="/notification"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div className="row nav-list">
                      <div className="col-2">
                        <i className="fa-regular fa-bell"></i>
                      </div>
                      <div className="col-8">
                        <p className="">Notifikasi</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/myaccount"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div className="row nav-list">
                      <div className="col-2">
                        <i className="fa-regular fa-user"></i>
                      </div>
                      <div className="col-8">
                        <p className="">Akun Saya</p>
                      </div>
                    </div>
                  </Link>
                </>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
