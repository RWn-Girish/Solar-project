import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Blog_input.css';

const BlogInput = ({ setSearchTerm }) => {
  return (
    <div className="blog-input-container mt-5">
      <div className="input-wrapper">
        <input 
          type="text" 
          placeholder="Search blog..." 
          className="blog-search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default BlogInput;
