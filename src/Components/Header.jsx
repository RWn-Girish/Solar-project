import './Header.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaComments } from 'react-icons/fa';
import headerlogo  from '../assets/images/white-logo.png';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={headerlogo}
            //   width="30px"
            //   height="30px"
              className="d-inline-block align-top me-2"
              alt="Solarex logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavDropdown title="Home" id="home-dropdown">
                <NavDropdown.Item href="#home/1">Home 1</NavDropdown.Item>
                <NavDropdown.Item href="#home/2">Home 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About Us</Nav.Link>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item href="#services/1">
                  Service 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/2">
                  Service 2
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="projects-dropdown">
                <NavDropdown.Item href="#projects/1">
                  Project 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#projects/2">
                  Project 2
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blogs" id="blogs-dropdown">
                <NavDropdown.Item href="#blogs/1">Blog 1</NavDropdown.Item>
                <NavDropdown.Item href="#blogs/2">Blog 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="pages-dropdown">
                <NavDropdown.Item href="#pages/1">Page 1</NavDropdown.Item>
                <NavDropdown.Item href="#pages/2">Page 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>

              {/* Help section with phone number */}
              <div className="d-flex align-items-center ms-4">
                <FaComments size={20} className="me-2" />
                <div className="d-flex flex-column">
                  <small className="text-muted">Need help?</small>
                  <strong>(307) 555-0133</strong>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
