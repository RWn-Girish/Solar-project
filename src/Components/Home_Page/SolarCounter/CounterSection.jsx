import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CounterSection.css';

const CounterSection = () => {
  const stats = [
    {
      value: '1300+',
      label: 'Total Installed Solar Projects',
      icon: '☀️'
    },
    {
      value: '20+',
      label: 'MW Installations',
      icon: '⚡'
    },
    {
      value: '50+',
      label: 'Kilotons of CO2 Emissions Reduced Per Year',
      icon: '🌱'
    }
  ];

  return (
    <section className="stats-section">
      <Container>
        <Row className="g-4 justify-content-center">
          {stats.map((stat, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="stat-box">
                <div className="stat-icon" data-icon={stat.icon}>
                  {stat.icon}
                </div>
                <h2 className="stat-value">{stat.value}</h2>
                <p className="stat-label">{stat.label}</p>
                <div className="stat-decoration"></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CounterSection;