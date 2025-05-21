import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Blog_input.css';

const BlogInput = () => {
  return (
    <div className="blog-input-container mt-5">
      <div className="input-wrapper">
        <input 
          type="text" 
          placeholder="Search blog..." 
          className="blog-search-input"
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default BlogInput;