import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import './single_blog.css';

const SingleBlogCard = ({ 
  imageUrl, 
  date, 
  author, 
  title, 
  excerpt, 
  readMoreLink 
}) => {
  return (
    <Card className="blog-card">
      <div className="img-wrapper">
        <Card.Img variant="top" src={imageUrl} alt={title} />
      </div>
      <Card.Body>
        <div className="meta-info">
          <span className="date">
            <FaCalendarAlt className="icon" /> {date}
          </span>
          <span className="author">
            <FaUser className="icon" /> {author}
          </span>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="excerpt">{excerpt}</Card.Text>
        <a href={readMoreLink} className="read-more-btn">
          Read Details <FaArrowRight className="icon" />
        </a>
      </Card.Body>
    </Card>
  );
};

export default SingleBlogCard;