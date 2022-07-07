import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function MyNavbar(props) {
  const logo = {
    width: '100px',
    height: '34px',
    left: '136px',
    top: '27px',
    background: '#4B1979',
  };

  return (
    <Navbar expand="lg" className="fox">
      <Container>
        <div className="logo"></div>
        <div className="col-sm-4">
          <Link to="/">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div style={logo} className="mt-2 logo"></div>
            </Nav>
          </Link>
        </div>
        <div className="col-sm-4">
          <Navbar.Text className="justify-content-center d-flex">
            {props.title}
          </Navbar.Text>
        </div>
        <div className="col-sm-4"></div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
