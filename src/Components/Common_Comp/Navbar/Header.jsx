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
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Project">Projects</Nav.Link>
         

            <NavDropdown title="Solar" id="solar-dropdown">
              <NavDropdown.Item href="#solar/Subsidy Scheme"> <Link to={"/Solar"} className='text-black text-decoration-none'>Commercial</Link> </NavDropdown.Item>
              <NavDropdown.Item href="#solar/Apartmenta">Apartmenta</NavDropdown.Item>
              <NavDropdown.Item href="#solar/Systems">Systems</NavDropdown.Item>
              <NavDropdown.Item href="#solar/Consulancy">Consulancy</NavDropdown.Item>
              <NavDropdown.Item href="#solar/Solutions">Solutions</NavDropdown.Item>
              <NavDropdown.Item href="#solar/Solar Care">Solar Care</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#ev-charging">EV Charging</Nav.Link>

            <NavDropdown title="Knowledge Center" id="knowledge-dropdown">
              <NavDropdown.Item as={Link} to="/SolarRange">Solar Calculator</NavDropdown.Item>
              <NavDropdown.Item href="#knowledge/Why Solar ">Why Solar ?</NavDropdown.Item>
              <NavDropdown.Item href="#knowledge/How Solar Works ">How Solar Works ?</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#knowledge/Solar Monitoring ">Solar Monitoring</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#knowledge/Latest ">Latest</NavDropdown.Item>

            </NavDropdown> 

            
            <Nav.Link href="#partner"> <Link to={"/Partner"} className='text-black text-decoration-none'>Partner With US</Link></Nav.Link>

            
            <NavDropdown title="About Us" id="about-dropdown">
            <NavDropdown.Item href="#solar/Subsidy Scheme"> <Link to={"/AboutUs"} className='text-black text-decoration-none'>Vision</Link> </NavDropdown.Item>

              <NavDropdown.Item href="#about/Our Team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#about/Our Journey">Our Journey</NavDropdown.Item>
              <NavDropdown.Item href="#about/Partners">Partners</NavDropdown.Item>
              <NavDropdown.Item href="#about/Awards / Certifications">Awards / Certifications</NavDropdown.Item>
              <NavDropdown.Item href="#about/Customer Referral Policy">Customer Referral Policy</NavDropdown.Item>
              <NavDropdown.Item href="#about/Testimonial">Testimonial</NavDropdown.Item>
              <NavDropdown.Item href="#about/Media Coverage">Media Coverage</NavDropdown.Item>
              <NavDropdown.Item href="#about/Privacy Policy">Privacy Policy</NavDropdown.Item>
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
