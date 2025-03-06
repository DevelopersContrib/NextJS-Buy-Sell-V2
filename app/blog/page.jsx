import BlogList from "@/components/Blog/BlogList";

const Blog = async () => {
  return (
    <section className="tw-min-h-[calc(100vh-56px-74px)] tw-relative tw-flex tw-w-full tw-bg-white">
      <div className="container">
        <BlogList />
      </div>
    </section>
  );
};

export default Blog;
