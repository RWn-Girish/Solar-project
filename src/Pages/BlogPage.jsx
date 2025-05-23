import BlogExample from '../Components/Blog_Page/Blog_Card/Blog_card';
import Blog_input from '../Components/Blog_Page/Blog_input/Blog_Input';
import Title from '../Components/Common_Comp/Title/Title';

const BlogPage = (props) => {
  return (
    <>
      <Title title="Our Blog" page="Home" pageContent="Knowledge Center" />
      <Blog_input />
      <BlogExample />
    </>
  );
};

export default BlogPage;
