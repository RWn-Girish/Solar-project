import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.css';
import solarPanelImg from '../../../assets/images/card.1.jpg';
import miniSolarImg from '../../../assets/images/card.2.webp';

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} className="order-lg-1 order-2">
            <div className="section-header mb-4">
              <span className="section-subtitle-about text-primary">— ABOUT COMPANY —</span>
              <h2 className="section-title-about mt-3 mb-4">Our mission is to make sustainable energy accessible</h2>
              <p className="section-description">
                We are passionate about transforming the way we power our world. As a leading
                provider of renewable energy solutions, we are committed to driving the
                transition to a cleaner, more sustainable future.
              </p>
            </div>

            <div className="experience-card p-4 rounded">
              <Row className="align-items-center">
                <Col xs={3} className="pe-0">
                  <div className="experience-number">13+</div>
                </Col>
                <Col xs={6}>
                  <div className="experience-text">
                    <strong>Years Experience</strong><br />
                    In Sustainable Energy Industry
                  </div>
                </Col>
                <Col xs={3} className="ps-0">
                  <div className="experience-img-container">
                    <img src={miniSolarImg} alt="Solar Experience" className="experience-img" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={6} className="order-lg-2 order-1">
            <div className="about-img-container position-relative">
              <img 
                src={solarPanelImg} 
                alt="Solar Panel Installation" 
                className="about-img img-fluid rounded" 
              />
              <div className="img-decoration-1"></div>
              <div className="img-decoration-2"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;