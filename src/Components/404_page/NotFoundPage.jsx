import React from 'react';
import { FiHome, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="electric-pulse"></div>

      <div className="not-found-content">
        <div className="error-code">
          4<span className="zero-animation">0</span>4
        </div>

        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>

        <div className="action-buttons">
          <Link to="/" className="home-button">
            <FiHome /> Go Home
          </Link>
        </div>

        <div className="ev-illustration">
          <svg viewBox="0 0 200 100" className="ev-car">
            {/* EV Car Illustration */}
            <rect x="30" y="50" width="140" height="30" rx="5" fill="#28a745" opacity="0.8" />
            <rect x="40" y="40" width="120" height="10" rx="5" fill="#17a2b8" />
            <circle cx="60" cy="80" r="10" fill="#2c3e50" />
            <circle cx="140" cy="80" r="10" fill="#2c3e50" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;