import './Header.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import headerlogo from '../../../assets/images/Header-logo.jpg';
import { Link } from 'react-router';

const Header = () => {

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={headerlogo}
            height="90"
            className="d-inline-block align-top"
            alt="Solarex logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="header-center d-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

            <NavDropdown title="Solar" id="solar-dropdown">
              <NavDropdown.Item href="#solar/overview">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item href="#solar/solutions">
                Solutions
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#ev-charging">EV Charging</Nav.Link>

            <NavDropdown title="Knowledge Center" id="knowledge-dropdown">
              <NavDropdown.Item href="#knowledge/blogs"> <Link to={"/blog"}>Blogs </Link></NavDropdown.Item>
              <NavDropdown.Item href="#knowledge/blogs"> <Link to={"/faqs"}>FAQPage </Link></NavDropdown.Item>
              <NavDropdown.Item href="#knowledge/videos">
                Videos
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#partner">Partner with Us</Nav.Link>

            <NavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item href="#about/company">Company</NavDropdown.Item>
              <NavDropdown.Item href="#about/team">Team</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <div className="header-right d-none d-lg-block">
          <a href="tel:+918123410101" className="reach-btn">
            Reach us : (+91) 8123410101
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;