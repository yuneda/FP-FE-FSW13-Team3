import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function MyNavbar(props) {
  const colorActive = {
    color: '#7126B5',
  };
  const colorInactive = {
    color: 'black',
  };
  const btnStyle = {
    background: '#7126B5',
    borderRadius: '12px',
    padding: '14px 16px',
    color: 'white',
  };
  const logo = {
    width: '100px',
    height: '34px',
    left: '136px',
    top: '27px',
    background: '#4B1979',
  };
  return (
    <Navbar
      expand="lg"
      style={{
        borderBottom: '3px solid #EEEEEE',
      }}
    >
      <Container>
        <div className="logo"></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
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
                  border: 'none',
                  background: 'none',
                  width: '400px',
                }}
              />
              <button onClick={props.handleSubmitSearch}>
                <i className="fa-solid fa-magnifying-glass me-2"></i>
              </button>
            </div>
          </Nav>
          {/* Not Login */}
          {!props.token && (
            <Link to="/login">
              <button style={btnStyle}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Masuk
              </button>
            </Link>
          )}
          {/* Login */}
          {props.token && (
            <>
              <Link to="/product">
                <div style={colorInactive}>
                  <i className="fa-solid fa-list-ul me-3"></i>
                </div>
              </Link>
              <div
                onClick={props.onToggleClick}
                style={{
                  cursor: 'pointer',
                }}
              >
                <i className="fa-regular fa-bell me-3 text-black"></i>
              </div>
              <Link to="/login">
                <div>
                  <i className="fa-regular fa-user text-black"></i>
                </div>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
