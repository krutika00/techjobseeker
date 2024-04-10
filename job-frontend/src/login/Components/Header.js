import React from "react";
import { Navbar, Container ,Button ,Nav, } from "react-bootstrap";
import { Link } from "react-router-dom";
 import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="header-login-1" variant="light">
        <Container>
          <Navbar.Brand className=" text-primary font-italic " href="/Login">
            {/* <i className="bi bi-search"></i> */}
            <span className="d-flex">
              <i
                className="bi bi-search"
                style={{ fontSize: "1.75rem", margin: "0px 6px" ,color:"white" }}
              ></i>
              <h1  style={{ color:"white" }}>JOB PORTAL </h1>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
           aria-controls="responsive-navbar-nav"
          />
           <Navbar.Collapse
            id="responsive-navbar-nav"
          />
            <Nav
              // style={{ marginLeft: "1000px" }}
              className="me-auto"
            >
              <Nav.Link href="/">
                <Button variant="primary">Home</Button>
              </Nav.Link>

             
            </Nav>
        </Container>
      </Navbar>
     
      
    </div>
  );
}

export default Header;
