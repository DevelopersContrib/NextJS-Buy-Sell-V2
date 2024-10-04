import { getBlogPostById } from "@/sanity/sanity-utils";
import { getDomain } from "@/lib/data";

const getBlogId = (params) => {
  const id = params.split("---")[1];
  return id;
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const id = getBlogId(slug);
  const domain = getDomain();
  if (domain) {
    const post = await getBlogPostById(id, domain);

    if (post) {
      return {
        title: post.title,
        description: post.title,
      };
    }
  }
}

const BlogDetails = async ({ params }) => {
  const { slug } = params;
  const id = getBlogId(slug);
  const domain = getDomain();
  const post = await getBlogPostById(id, domain);
 
  if (post) {
    return (
      <>
        
        <section className="tw-min-h-screen tw-py-16">
          <div className="container ">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="custom-blog-content"
            />
          </div>
        </section>
       
      </>
    );
  }
};
export default BlogDetails;
