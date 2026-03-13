"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../components/Logo";
import Form from "./Form";
import Thanku from "./Thanku";

const Container = ({ domain, logo, countries }) => {
  const [success, setSuccess] = useState(false);

  const cardStyle = {
    background: "linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02)), #0f1011",
    border: "1px solid rgba(255,255,255,.08)",
  };

  return (
    <section className="tw-min-h-[calc(100vh-56px-74px)] tw-relative tw-py-16 tw-flex tw-w-full tw-items-center tw-bg-[#08090A] tw-text-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 tw-text-center tw-mb-8">
            <Logo domain={domain} logo={logo} />
          </div>

          {success ? (
            <Thanku />
          ) : (
            <div className="col-xl-12">
              <div className="row tw-align-items-start tw-g-6">
                <div className="col-xl-7 col-lg-7 page-form-theme">
                  <Form
                    domain={domain}
                    countries={countries}
                    setSuccess={setSuccess}
                  />
                </div>
                <div className="col-xl-5 col-lg-5 tw-flex tw-flex-col tw-gap-4 lg:tw-sticky lg:tw-top-24">
                  <div className="tw-rounded-xl tw-p-5 tw-flex tw-items-center tw-gap-4" style={cardStyle}>
                    <div className="tw-shrink-0">
                      <Image src="https://cdn.vnoc.com/icons/domain.jpg" width={80} height={80} alt="" className="img-fluid tw-rounded-full tw-object-cover" />
                    </div>
                    <div>
                      <h4 className="tw-text-base tw-font-semibold tw-text-white tw-mb-1">Select Your Domain</h4>
                      <p className="tw-text-zinc-400 tw-text-sm tw-mb-0">Search Ecorp&apos;s database for the ultimate domain name for your business, project or brand.</p>
                    </div>
                  </div>
                  <div className="tw-rounded-xl tw-p-5 tw-flex tw-items-center tw-gap-4" style={cardStyle}>
                    <div className="tw-shrink-0">
                      <Image src="https://cdn.vnoc.com/icons/offer.jpg" width={80} height={80} alt="" className="img-fluid tw-rounded-full tw-object-cover" />
                    </div>
                    <div>
                      <h4 className="tw-text-base tw-font-semibold tw-text-white tw-mb-1">Submit your best offer</h4>
                      <p className="tw-text-zinc-400 tw-text-sm tw-mb-0">We&apos;ll let you know if it&apos;s too low for consideration.</p>
                    </div>
                  </div>
                  <div className="tw-rounded-xl tw-p-5 tw-flex tw-items-center tw-gap-4" style={cardStyle}>
                    <div className="tw-shrink-0">
                      <Image src="https://cdn.vnoc.com/icons/agreement.jpg" width={80} height={80} alt="" className="img-fluid tw-rounded-full tw-object-cover" />
                    </div>
                    <div>
                      <h4 className="tw-text-base tw-font-semibold tw-text-white tw-mb-1">Agree to the terms</h4>
                      <p className="tw-text-zinc-400 tw-text-sm tw-mb-0">Once the price is decided, agree to the terms of the domain name sales agreement.</p>
                    </div>
                  </div>
                  <div className="tw-rounded-xl tw-p-5 tw-flex tw-items-center tw-gap-4" style={cardStyle}>
                    <div className="tw-shrink-0">
                      <Image src="https://cdn.vnoc.com/icons/transfer.jpg" width={80} height={80} alt="" className="img-fluid tw-rounded-full tw-object-cover" />
                    </div>
                    <div>
                      <h4 className="tw-text-base tw-font-semibold tw-text-white tw-mb-1">Launch your website</h4>
                      <p className="tw-text-zinc-400 tw-text-sm tw-mb-0">Once payment has been confirmed the owner will transfer the domain to you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Container;
