import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { getData, getDomain } from '../lib/data';
import Script from 'next/script';

// Async function to generate SEO metadata
export async function generateMetadata() {
  const c = await getData();

  const domain = c.data.domainName;
  const title =
    !c.data.title || c.data.title.trim() === ''
      ? 'Welcome to ' + domain
      : c.data.title;
  const description =
    !c.data.description || c.data.description.trim() === ''
      ? `Join a vibrant community of developers, influencers, and entrepreneurs on ${domain}, all using the versatile CONTRIB token to power their token economies!`
      : c.data.description;
  const keywords =
    !c.data.keywords || c.data.keywords.trim() === ''
      ? ['website']
      : c.data.keywords.split(',');
  const author =
    !c.data.author || c.data.author.trim() === '' ? 'contrib' : c.data.author;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      siteName: domain,
      type: 'website',
      locale: 'en_US',
      url: `https://${domain}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}


export default async function RootLayout({ children }) {
  const domain = getDomain();
  
  const c = await getData();
  return (
    <html lang="en">
      <head>
         
        { c.data.adsenseClientId!==''?(<Script id="g-ads" async='' src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${c.data.adsenseClientId}`} crossorigin="anonymous"  data-checked-head="true"></Script>):'' }
        <Script id="g-manager" async src={`https://www.googletagmanager.com/gtag/js?id=${c.data.accountGA}`}></Script>
        <Script id="g-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${c.data.accountGA}');
          `}
        </Script>
        <Script id="g-matomo" type="text/javascript">
          {`
            var _paq = window._paq || [];
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(["setCookieDomain", "*.${domain}"]);
            _paq.push(["setDomains", ["*.${domain}"]]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//stats.numberchallenge.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', ${c.data.piwikId}]);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
     {/*
        <noscript>{`<p><img src="${"//stats.numberchallenge.com/matomo.php?idsite="+c.data.piwikId}" alt="" /></p>`}</noscript>
         
        <Script id="test-script" src="https://tools.contrib.com/js/test.js"></Script>
        */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
