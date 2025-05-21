import SingleBlogCard from "./Single_blog";

const BlogExample = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <SingleBlogCard
            imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
            date="May 21, 2023"
            author="John Doe"
            title="Sustainable Gardening Tips for Beginners"
            excerpt="Learn how to start your own sustainable garden with these easy-to-follow tips that will help you grow organic produce while protecting the environment."
            readMoreLink="#"
          />
        </div>
       
      </div>
    </div>
  );
};

export default BlogExample;