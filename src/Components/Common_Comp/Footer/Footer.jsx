import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import FooterLogo from "../../../assets/images/Prestige (4) 1.png";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          {/* Logo & Socials */}
        <Col xs={12} md={6} lg={3}>
          <div className="d-flex align-items-center gap-3 mb-3">
            <img src={FooterLogo} alt="EcoSoch" className="footer-logo" />
          </div>
          <h4 className="footer-title mb-0">Ecosoch</h4>
          <p className="footer-desc">
            We are committed to promoting sustainability and environmental awareness.
          </p>

          <div className="d-flex gap-3 mt-3 footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons"><FaFacebookF /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons"><FaYoutube /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons"><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons"><FaLinkedin /></a>
          </div>
        </Col>

          {/* Useful Links */}
          <Col xs={12} md={6} lg={3}>
            <h4 className="footer-title">Useful Links</h4>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/solar-calculator">Calculator</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/out-partner">Our Partner</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={6} lg={3}>
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact-info">
              <div><FaPhoneAlt className="footer-icon" /> +91-8123410101</div>
              <div><AiOutlineMail className="footer-icon" /> info@ecosoch.com</div>
              <div><FaMapMarkerAlt className="footer-icon" /> Kodigehalli, Bengaluru 560097</div>
            </div>
          </Col>

          {/* Newsletter */}
          <Col xs={12} md={6} lg={3}>
            <h4 className="footer-title">Subscribe</h4>
            <p className="footer-news-text">Get updates about our latest offers and events.</p>
            <div className="footer-newsletter-section mt-3">
              <input type="email" placeholder="Enter your email" className="footer-input" />
              <button className="footer-btn mt-2">Subscribe</button>
            </div>
          </Col>

        </Row>

        {/* Bottom Info */}
        <Row className="mt-4">
          <Col xs={12}>
            <div className="footer-copyright-info">
              <p className="text-center mt-3 mb-0">© {new Date().getFullYear()} Ecosoch. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
