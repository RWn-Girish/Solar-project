import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  FaBolt,
  FaPlug,
  FaChargingStation,
  FaArrowRight
} from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import './AvailableProducts.css';

const products = [
  {
    title: "Combination Charger",
    icon: <GiElectric size={40} className="icon-gradient" />,
    desc: "Supports both AC and DC charging with smart power distribution. Ideal for commercial locations needing versatile charging options.",
    features: ["AC/DC switching", "Dynamic load balancing", "Remote monitoring"]
  },
  {
    title: "AC Wall Charger",
    icon: <FaPlug size={40} className="icon-gradient" />,
    desc: "Perfect for homes, workplaces, and public stations. Easy installation with customizable power output.",
    features: ["7.4kW/22kW options", "OCCP compliant", "Weatherproof design"]
  },
  {
    title: "DC Fast Charger",
    icon: <FaChargingStation size={40} className="icon-gradient" />,
    desc: "High-speed commercial charging solution. Charge to 80% in under 30 minutes for mofest EVs.",
    features: ["50-350kW power", "Liquid cooled", "Multi-vehicle support"]
  }
];

function AvailableProducts() {
  return (
    <section className="available-products-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title-EV">Our Charging Solutions</h2>
          <p className="section-subtitle">Cutting-edge technology for every charging need</p>
        </div>
        <Row className="g-4">
          {products.map((product, idx) => (
            <Col lg={4} md={6} key={idx}>
              <Card className="product-card h-100">
                <Card.Body className="text-center p-4">
                  <div className="icon-wrapper mb-4">
                    {product.icon}
                  </div>
                  <Card.Title as="h3" className="mb-3">{product.title}</Card.Title>
                  <Card.Text className="mb-4">{product.desc}</Card.Text>
                  <ul className="features-list text-start mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="d-flex align-items-center mb-2">
                        <FaBolt size={12} className="me-2 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-primary" className="d-flex align-items-center mx-auto">
                    Learn More <FaArrowRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AvailableProducts;