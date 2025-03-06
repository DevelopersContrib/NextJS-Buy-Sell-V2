"use client";
import BlogSlugPage from "@/modules/blog-slug";

const BlogPost = ({ params }) => {
  const [id, slug] = params.params;

  return (
    <div className="tw-min-h-screen ">
      <BlogSlugPage id={id} />
    </div>
  );
};

export default BlogPost;
