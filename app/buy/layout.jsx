
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { getDomain } from '../../lib/data';

export async function generateMetadata({ params, searchParams }, parent) {
  const c = await getData();
  return {
    title: c.data.title ? c.data.title : 'Welcome to '+c.data.domainName,
    description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
  }
}

export default function BuyLayout({ children }) {
  const domain = getDomain()

  return (
    <>
      <Navigation domain={domain} />
      {children}
      <Footer domain={domain} />
    </>
  )
}
