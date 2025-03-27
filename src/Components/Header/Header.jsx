import "./Header.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "../../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // ✅ Scroll করলে Navbar Sticky হবে
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`navi ${isSticky ? "sticky-top" : ""}`}>
      <NavbarBrand tag={NavLink} to="/">
        <img src={logo} alt="logo" width={150} />
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="m-auto" navbar>
          {["Home", "About", "Blog", "Contact"].map((item) => (
            <NavItem key={item}>
              <NavLink to={`/${item.toLowerCase()}`} className="nav-link">
                {item}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <div className="d-flex align-items-center gap-3 me-4">
          {[faUser, faCartShopping, faHeart].map((icon, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              size="lg"
              className="nav-icon"
            />
          ))}
        </div>
        <Button className="nav-btn-sign">Sign up</Button>
      </Collapse>
    </Navbar>
  );
};

export default Header;
