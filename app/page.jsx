import BlogList from "@/components/Blog/BlogList";
import BlogSection from "@/components/BlogSection";
import StaticCTAButton from "@/components/LatestCTA";
import Notification from "@/components/notification/Notification";
import Image from "next/image";
import Footer from "../components/Footer";
import FormOptions from "../components/Home/Form";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import TopDomainsComponent from "../components/TopDomainsComponent";
import {
  getData,
  getDomain,
  getLatestContributions,
  getLatestContributors,
  getScript,
  getTopsites,
} from "../lib/data";
// import FomoPopup from "@/components/TokenSalePopup";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const domainLabel = domain.charAt(0).toUpperCase() + domain.slice(1);
  const topDomains = await getTopsites();
  const latestContributions = await getLatestContributions();
  const latestContributors = await getLatestContributors();

  const background =
    c.data.background_url !== null
      ? c.data.background_url
      : "https://cdn.vnoc.com/background/tech4.jpg";
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
      domain
  );

  return (
    <>
      <Navigation domain={domain} />
      <section className="tw-relative tw-isolate tw-flex tw-w-full tw-items-center tw-overflow-hidden tw-bg-[#08090a] tw-text-white tw-py-16 md:tw-py-24">
        <div
          className="tw-pointer-events-none tw-absolute tw-inset-0 tw-overflow-hidden"
          aria-hidden
        >
          <div className="tw-absolute tw--top-32 tw-left-1/2 tw-h-[420px] tw-w-[min(100%,720px)] tw--translate-x-1/2 tw-rounded-full tw-bg-[#5e6ad2]/[0.14] tw-blur-[90px]" />
          <div className="tw-absolute tw--bottom-24 tw--right-24 tw-h-[280px] tw-w-[420px] tw-rounded-full tw-bg-violet-600/[0.1] tw-blur-[72px]" />
        </div>
        <div
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-opacity-[0.35]"
          style={{ backgroundImage: "url('/images/dark-overlay.png')" }}
          aria-hidden
        />
        <div className="container tw-relative tw-z-10">
          <div className="row tw-align-items-start tw-gy-10">
            <div className="col-xl-8 tw-mb-xl-0">
              <Logo
                domain={domain}
                logo={c.data.logo}
                align="start"
                hideTextWordmark={!c.data.logo}
              />
              <div className="tw-mt-8 tw-text-center md:tw-mt-10 md:tw-text-left">
                <p className="tw-mb-4 tw-text-[11px] tw-font-medium tw-uppercase tw-tracking-[0.2em] tw-text-zinc-500 md:tw-text-xs">
                  Domain marketplace
                </p>
                <h1 className="tw-mb-5 tw-text-3xl tw-font-semibold tw-tracking-tight tw-leading-[1.12] sm:tw-text-4xl md:tw-text-5xl lg:tw-text-[3.25rem]">
                  <span className="tw-text-zinc-400">Own </span>
                  <span className="tw-font-semibold tw-tracking-tight tw-text-white">
                    {domainLabel}
                  </span>{" "}
                  <span className="tw-text-zinc-300">on your terms</span>
                </h1>
                <p className="tw-mx-auto tw-mb-6 tw-max-w-xl tw-text-base tw-leading-relaxed tw-text-zinc-400 md:tw-mx-0 md:tw-text-lg">
                  Make an offer, negotiate, and close with confidence. Buy, lease,
                  rent, or partner — all backed by the Contrib network.
                </p>
                <ul className="tw-mb-0 tw-flex tw-list-none tw-flex-wrap tw-justify-center tw-gap-x-6 tw-gap-y-2 tw-pl-0 md:tw-justify-start">
                  <li className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-zinc-500">
                    <span
                      className="tw-h-1 tw-w-1 tw-shrink-0 tw-rounded-full tw-bg-emerald-400/90"
                      aria-hidden
                    />
                    Simple, guided steps
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-zinc-500">
                    <span
                      className="tw-h-1 tw-w-1 tw-shrink-0 tw-rounded-full tw-bg-emerald-400/90"
                      aria-hidden
                    />
                    150,000+ contributors
                  </li>
                </ul>
                <div className="tw-mx-auto tw-mt-8 tw-max-w-xl md:tw-mx-0">
                  <p className="tw-mb-4 tw-text-center tw-text-[11px] tw-font-medium tw-uppercase tw-tracking-[0.2em] tw-text-zinc-500 md:tw-text-left md:tw-text-xs">
                    Three ways to move forward
                  </p>
                  <div className="tw-grid tw-grid-cols-1 tw-gap-3 md:tw-grid-cols-3">
                    <div
                      className="tw-rounded-lg tw-border tw-border-white/[0.08] tw-bg-[linear-gradient(0deg,rgba(255,255,255,.02),rgba(255,255,255,.02))] tw-p-4 tw-text-left tw-transition-colors tw-duration-200 hover:tw-border-white/[0.12]"
                    >
                      <p className="tw-mb-1 tw-text-sm tw-font-semibold tw-text-white">
                        Make an offer
                      </p>
                      <p className="tw-mb-0 tw-text-xs tw-leading-relaxed tw-text-zinc-500">
                        Name your price and negotiate with the seller.
                      </p>
                    </div>
                    <div
                      className="tw-rounded-lg tw-border tw-border-white/[0.08] tw-bg-[linear-gradient(0deg,rgba(255,255,255,.02),rgba(255,255,255,.02))] tw-p-4 tw-text-left tw-transition-colors tw-duration-200 hover:tw-border-white/[0.12]"
                    >
                      <p className="tw-mb-1 tw-text-sm tw-font-semibold tw-text-white">
                        Partner
                      </p>
                      <p className="tw-mb-0 tw-text-xs tw-leading-relaxed tw-text-zinc-500">
                        Explore sponsorship, distribution, or affiliate deals.
                      </p>
                    </div>
                    <div
                      className="tw-rounded-lg tw-border tw-border-white/[0.08] tw-bg-[linear-gradient(0deg,rgba(255,255,255,.02),rgba(255,255,255,.02))] tw-p-4 tw-text-left tw-transition-colors tw-duration-200 hover:tw-border-white/[0.12]"
                    >
                      <p className="tw-mb-1 tw-text-sm tw-font-semibold tw-text-white">
                        Join the team
                      </p>
                      <p className="tw-mb-0 tw-text-xs tw-leading-relaxed tw-text-zinc-500">
                        Create a Contrib account tied to this domain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 tw-relative xl:tw-sticky xl:tw-top-24">
              <div className="tw-mx-auto tw-w-full tw-max-w-[420px] xl:tw-mx-0 xl:tw-max-w-none">
                <FormOptions domain={domain} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro cards + Feature cards */}
      <section className="tw-py-20 md:tw-py-28 tw-bg-[#08090A]">
        <div className="container">
          <p className="tw-text-center tw-text-xs tw-uppercase tw-tracking-widest tw-text-zinc-500 tw-mb-6">
            Why {domain.charAt(0).toUpperCase() + domain.slice(1)}
          </p>
          <div className="row tw-g-4 tw-mb-16">
            <div className="col-lg-6">
              <div
                className="tw-h-full tw-rounded-xl tw-p-6 md:tw-p-8 tw-transition-all tw-duration-200 hover:tw-border-[#3f4040] tw-text-center md:tw-text-left"
                style={{
                  background: "linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02)), #0f1011",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <h2 className="tw-text-xl md:tw-text-2xl tw-font-semibold tw-tracking-tight tw-text-white tw-mb-4">
                  Your site is a reflection of your brand
                </h2>
                <p className="tw-text-zinc-400 tw-text-sm md:tw-text-base tw-leading-[1.75] tw-mb-0">
                  Invest in an impactful domain like{" "}
                  <span className="tw-text-white tw-font-semibold">{domain.charAt(0).toUpperCase() + domain.slice(1)}</span>{" "}
                  that projects your voice. Make an offer, partner, lease, or join the team today at Contrib.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tw-h-full tw-rounded-xl tw-p-6 md:tw-p-8 tw-transition-all tw-duration-200 hover:tw-border-[#3f4040] tw-text-center md:tw-text-left"
                style={{
                  background: "linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02)), #0f1011",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <p className="tw-text-3xl md:tw-text-4xl tw-font-semibold tw-tracking-tight tw-text-white tw-mb-2">
                  150,000+
                </p>
                <p className="tw-text-sm tw-uppercase tw-tracking-widest tw-text-zinc-500 tw-mb-3">
                  contributors
                </p>
                <p className="tw-text-zinc-400 tw-text-sm md:tw-text-base tw-leading-[1.6] tw-mb-0">
                  Our Contrib community shares their original content for {domain.charAt(0).toUpperCase() + domain.slice(1)}.
                </p>
              </div>
            </div>
          </div>
          <p className="tw-text-center tw-text-xs tw-uppercase tw-tracking-widest tw-text-zinc-500 tw-mb-3">How it works</p>
          <h2 className="tw-text-center tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-white tw-tracking-tight tw-mb-12">
            Built for getting the domain you want
          </h2>
          <div className="row tw-g-4">
            <div className="col-lg-4">
              <div
                className="tw-h-full tw-rounded-xl tw-p-6 tw-transition-all tw-duration-200 hover:tw-border-[#3f4040]"
                style={{
                  background: "linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02)), #0f1011",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div className="tw-mb-4 tw-inline-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-xl tw-bg-white/[0.08]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="tw-w-9 tw-h-9 tw-text-white">
                    <path d="M12 2L15 8.5L12 22L9 8.5L12 2Z" />
                    <path d="M12 2L9 8.5L2 10L12 2Z" />
                    <path d="M12 2L15 8.5L22 10L12 2Z" />
                  </svg>
                </div>
                <h4 className="tw-text-white tw-font-semibold tw-mb-2 tw-text-lg">Make An Offer</h4>
                <p className="tw-text-zinc-500 tw-text-sm tw-leading-relaxed tw-mb-0">
                  Find a domain and decide to buy, lease or rent it. Submit your best offer for the
                  owner&apos;s consideration.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="tw-h-full tw-rounded-xl tw-p-6 tw-transition-all tw-duration-200 hover:tw-border-[#3f4040]"
                style={{
                  background: "linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02)), #0f1011",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div className="tw-mb-4 tw-inline-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-xl tw-bg-white/[0.08]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="tw-w-9 tw-h-9 tw-text-white">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M12 12v4" />
                    <path d="M8 16h8" />
                  </svg>
                </div>
                <h4 className="tw-text-white tw-font-semibold tw-mb-2 tw-text-lg">Negotiate the price</h4>
                <p className="tw-text-zinc-500 tw-text-sm tw-leading-relaxed tw-mb-0">
                  Your offer may be accepted, countered or declined. Negotiations can take as little
                  as one day or up to a few weeks.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="tw-h-full tw-rounded-xl tw-p-6 tw-transition-all tw-duration-200 hover:tw-border-[#3f4040]"
                style={{
                  background: "linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02)), #0f1011",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div className="tw-mb-4 tw-inline-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-xl tw-bg-white/[0.08]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="tw-w-9 tw-h-9 tw-text-white">
                    <path d="M9 11l3 3 6-6" />
                    <path d="M20 12v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7" />
                    <path d="M14 5v4a2 2 0 0 1-2 2H6" />
                  </svg>
                </div>
                <h4 className="tw-text-white tw-font-semibold tw-mb-2 tw-text-lg">Make a deal</h4>
                <p className="tw-text-zinc-500 tw-text-sm tw-leading-relaxed tw-mb-0">
                  Once you&apos;ve agreed on the price, we facilitate the contract, payment, and
                  transfer or use of the domain name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StaticCTAButton />
      <Notification />      
      <Footer domain={domain} />
    </>
  );
}
