import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import './Footer.css';
import FooterLogo from "../../../assets/images/Prestige (4) 1.png";

const Footer = () => (
  <footer className="footer">
    <Container>

      {/* Top Info Bar */}
      <div className="footer-top-info">
        <Row>
          <Col xs={12} md={4} className="d-flex align-items-center mb-4 mb-md-0">
            <FaPhoneAlt className="footer-icon" />
            <div>
              <div style={{ fontSize: 14, color: "#fff" }}>Requesting A Call:</div>
              <div style={{ fontWeight: 600, fontSize: 20 }}>+91-8123410101</div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center mb-4 mb-md-0">
            <AiFillClockCircle className="footer-icon" />
            <div>
              <div style={{ fontSize: 14, color: "var(--paragraph-color)" }}>Email us for query:</div>
              <div style={{ fontWeight: 600, fontSize: 20 }}>info@ecosoch.com</div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center">
            <FaMapMarkerAlt className="footer-icon" />
            <div>
              <div style={{ fontSize: 14, color: "var(--paragraph-color)" }}>Location:</div>
              <div style={{ fontWeight: 600, fontSize: 20 }}>Kodigehalli, Bengaluru 560097</div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Main Footer */}
      <div className="footer-bottom-info">
        <Row style={{ padding: "80px 40px" }}>

          {/* Logo and Description */}
          <Col xs={12} md={4} className="mb-4 mb-md-0 d-flex flex-column gap-2">
            <img src={FooterLogo} alt="EcoSoch" style={{ width: 180, marginBottom: 18 }} />
            <p style={{ color: "var(--paragraph-color)", fontSize: 15 }}>
              EcoSoch® was started with a vision to deliver sustainable energy solutions for all...
            </p>
            <div className="footer-socials d-flex gap-2 mt-3">
              <a href="#" className="footer-social-icons"><FaFacebookF /></a>
              <a href="#" className="footer-social-icons"><FaLinkedinIn /></a>
              <a href="#" className="footer-social-icons"><FaYoutube /></a>
              <a href="#" className="footer-social-icons"><FaInstagram /></a>
            </div>
          </Col>

          {/* Useful Links */}
          <Col xs={12} md={4} lg={2} className="mb-4 mb-md-0">
            <div className="footer-useful-links">
              <div className="footer-title mb-3"><h4>Useful Links</h4></div>
              <ul className="footer-link d-flex flex-column gap-2" style={{ listStyle: "none", paddingLeft: 0, fontSize: 15 }}>
                <li><a href="#" className="text-decoration-none">Home</a></li>
                <li><a href="#" className="text-decoration-none">Projects</a></li>
                <li><a href="#" className="text-decoration-none">Partner with Us</a></li>
                <li><a href="#" className="text-decoration-none">About Us</a></li>
                <li><a href="#" className="text-decoration-none">Subsidy Scheme</a></li>
                <li><a href="#" className="text-decoration-none">FAQ</a></li>
                <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
          </Col>

          {/* 🔥 New Support Section */}
          <Col xs={12} md={4} lg={2} className="mb-4 mb-md-0">
            <div className="footer-useful-links">
              <div className="footer-title mb-3"><h4>Support</h4></div>
              <ul className="footer-link d-flex flex-column gap-2" style={{ listStyle: "none", paddingLeft: 0, fontSize: 15 }}>
                <li><a href="#" className="text-decoration-none">Customer Support</a></li>
                <li><a href="#" className="text-decoration-none">Installation Guide</a></li>
                <li><a href="#" className="text-decoration-none">Terms & Conditions</a></li>
                <li><a href="#" className="text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
          </Col>

          {/* Newsletter */}
          {/* 🔥 New Newsletter Section with Better Layout */}
          <Col xs={12} md={12} lg={4}>
            <div className="footer-newsletter-section p-3 rounded-3 shadow-sm">
              <div className="footer-title mb-2"><h4>Join Our Newsletter</h4></div>
              <p className="footer-news-text">
                Stay updated with the latest innovations, projects, and offers from EcoSoch.
              </p>
              <Form className="d-flex flex-column flex-sm-row gap-2 mt-3">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="footer-input"
                />
                <Button className="footer-btn">
                  Subscribe
                </Button>
              </Form>
            </div>
          </Col>


        </Row>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-copyright-info">
        <Row>
          <div class="footer-bottom d-flex justify-content-between">
            <div className="footer-copyright">
              <p className="fs-6">© 2025 EcoSoch. All Rights Reserved.</p>
            </div>
            <div className="footer-bottom-navlist ">
              <ul class="footer-ul-info">
                <li><a href="#" className="text-decoration-none ">Trams &amp; Condition</a></li>
                <li><a href="#" className="text-decoration-none ">Privacy Policy</a></li>
                <li><a href="#" className="text-decoration-none ">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </Row>
      </div>

    </Container>
  </footer>
);

export default Footer;