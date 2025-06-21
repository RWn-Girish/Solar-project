import React, { useState } from 'react';
import BlogExample from '../Components/Blog_Page/Blog_Card/Blog_card';
import BlogInput from '../Components/Blog_Page/Blog_input/Blog_Input';
import Title from '../Components/Common_Comp/Title/Title';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Title title="Our Blog" page="Home" pageContent="Knowledge Center" />
      <BlogInput setSearchTerm={setSearchTerm} />
      <BlogExample searchTerm={searchTerm} />
    </>
  );
};

export default BlogPage;
