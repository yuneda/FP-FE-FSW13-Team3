import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./OffcanvasProfile.scss";

function OffcanvasProfile(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const btnStyle = {
    background: "#7126B5",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "white",
  };
  const colorInactive = {
    color: "black",
  };

  return (
    <>
      <Navbar className="mb-3" expand="xl">
        <Container fluid>
          <i className="fa-solid fa-bars ms-3" onClick={handleShow}></i>
          <Navbar.Brand href="#" className="w-75 fw-bold">
            {props.title}
          </Navbar.Brand>
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
              {/* {props.token && props.tokenExpired && (
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
              )} */}
              {/* {props.token && !props.tokenExpired && ( */}
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
                  <div
                    onClick={props.onToggleMenu}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div className="row nav-list">
                      <div className="col-2">
                        <i className="fa-regular fa-user"></i>
                      </div>
                      <div className="col-8">
                        <p className="">Akun Saya</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
              {/* )} */}
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasProfile;
