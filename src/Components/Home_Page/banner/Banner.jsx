import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import './bannerSection.css';

const BannerSection = () => {
  return (
    <section className="residential-section">
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center">
          <Col lg={6} className="order-lg-1 order-2">
            <div className="residential-content">
              <h2 className="section-title">Residential Solutions</h2>
              <p className="section-subtitle">Premium solutions for individual houses and apartments</p>
              <div className="button-group mt-4">
                <button className="btn btn-primary btn-lg me-3 primary-btn">
                  Get a Quote <FaArrowRight className="ms-2" />
                </button>
                <button className="btn btn-outline-light btn-lg secondary-btn">
                  Explore More
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 order-1 mb-lg-0 mb-4">
            <div className="action-buttons">
              <div className="quote-box">
                <div className="icon-wrapper">
                  <FaEnvelope className="icon" />
                </div>
                <span>GET A QUOTE</span>
              </div>
              <div className="call-box">
                <div className="icon-wrapper">
                  <FaPhone className="icon" />
                </div>
                <span>CALL NOW</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSection;