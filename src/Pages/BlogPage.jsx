import BlogExample from '../Components/Blog_Page/Blog_Card/Blog_card';
import Blog_Title from '../Components/Blog_Page/Blog_Title/Blog_Title';
import Blog_input from '../Components/Blog_Page/Blog_input/Blog_Input';

const BlogPage = () => {
  return (
    <>
      <Blog_Title />
      <Blog_input />
      <BlogExample />
    </>
  );
};

export default BlogPage;
