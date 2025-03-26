import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import logo from "../../assets/logo.png";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="lg" className="navi">
        <NavbarBrand tag={NavLink} to="/">
          <img src={logo} alt="logo" width={150} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <NavItem className="d-block d-md-flex align-items-center justify-content-between me-5 my-3">
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              className="me-2"
              style={{ color: "#ff6700", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              className="mx-3"
              style={{ color: "#ff6700", cursor: "pointer" }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              className="ms-1"
              style={{ color: "#ff6700", cursor: "pointer" }}
            />
          </NavItem>

          <Button className="nav-btn-sign">Sign up</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
