import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { getData, getDomain } from "../../../lib/data";

export async function generateMetadata({ params, searchParams }, parent) {
  const c = await getData();
  return {
    title: c.data.title ? c.data.title : "Welcome to " + c.data.domainName,
    description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author,
  };
}

export default function BlogSlugLayout({ children }) {
  return <>{children}</>;
}
