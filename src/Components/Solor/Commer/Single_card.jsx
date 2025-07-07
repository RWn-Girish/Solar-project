import React from "react";

const SingleCard = ({ icon, title, description, readMore }) => {
  return (
    <div className="feature-card">
      <div className="d-flex align-items-center flex-column">

      <img src={icon} alt={title} className="feature-icon mb-0" />
      <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {readMore && (
        <p className="read-more">
          <a href={readMore.link}>Read More →</a>
        </p>
      )}
    </div>
  );
};

export default SingleCard;