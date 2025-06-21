import './Header.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import headerlogo from '../../../assets/images/Header-logo.jpg';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <Navbar expand="xl" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={headerlogo}
            height="80"
            className="d-inline-block align-top"
            alt="Solarex logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto header-center">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

            <NavDropdown title="Solar" id="solar-dropdown">
              <NavDropdown.Item href="#solar/overview">Overview</NavDropdown.Item>
              <NavDropdown.Item href="#solar/solutions">Solutions</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#ev-charging">EV Charging</Nav.Link>

            <NavDropdown title="Knowledge Center" id="knowledge-dropdown">
              <NavDropdown.Item as={Link} to="/blog">Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/SolarRange">Solar Calculator</NavDropdown.Item>
              <NavDropdown.Item href="#knowledge/videos">Videos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#partner">Partner with Us</Nav.Link>

            <NavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item href="#about/company">Company</NavDropdown.Item>
              <NavDropdown.Item href="#about/team">Team</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="header-right d-none d-lg-block">
            <a href="tel:+918123410101" className="reach-btn">
              Reach us : (+91) 8123410101
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
