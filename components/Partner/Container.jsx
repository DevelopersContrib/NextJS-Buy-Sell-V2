"use client";

import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import Logo from '../Logo';
import Form from './Form';
import Thanku from './Thanku';

const Container = ({domain, logo, countries}) => {
  const [emailCode, setEmailCode] = useState('');
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
          {!success ? (
            <div className="col-xl-12">
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-gap-0">
                <div
                  className="tw-flex-[0_0_50%] tw-p-8 lg:tw-p-12 tw-flex tw-justify-center tw-flex-col tw-rounded-l-xl"
                  style={cardStyle}
                >
                  <h2 className="tw-text-xl md:tw-text-2xl tw-font-semibold tw-text-white tw-mb-4 text-lg-end">
                    Invest in a great domain name as part of your brand strategy and take your business to the next level
                  </h2>
                  <div className="row tw-items-center">
                    <div className="col-xl-7 text-xl-end">
                      <ul className="list-unstyled tw-mb-0">
                        <li className="tw-mb-2">
                          <div className="tw-inline-flex tw-items-center tw-text-zinc-300">
                            Secure your online identity <FontAwesomeIcon icon={faCheck} className="tw-w-4 tw-h-4 tw-ml-2 tw-text-emerald-400" />
                          </div>
                        </li>
                        <li className="tw-mb-2">
                          <div className="tw-inline-flex tw-items-center tw-text-zinc-300">
                            Enhance your brand equity <FontAwesomeIcon icon={faCheck} className="tw-w-4 tw-h-4 tw-ml-2 tw-text-emerald-400" />
                          </div>
                        </li>
                        <li className="tw-mb-2">
                          <div className="tw-inline-flex tw-items-center tw-text-zinc-300">
                            Boost your credibility <FontAwesomeIcon icon={faCheck} className="tw-w-4 tw-h-4 tw-ml-2 tw-text-emerald-400" />
                          </div>
                        </li>
                        <li>
                          <div className="tw-inline-flex tw-items-center tw-text-zinc-300">
                            Improve conversion rates <FontAwesomeIcon icon={faCheck} className="tw-w-4 tw-h-4 tw-ml-2 tw-text-emerald-400" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-5">
                      <Image src="https://cdn.vnoc.com/icons/login-800x800.jpg" alt="" width={300} height={300} className="img-fluid tw-rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="tw-flex-[0_0_50%] page-form-theme tw-rounded-r-xl tw-border tw-border-l-0 tw-border-white/[0.08]" style={{ ...cardStyle, borderLeft: "none" }}>
                  <Form domain={domain} countries={countries} setSuccess={setSuccess} setEmailCode={setEmailCode} />
                </div>
              </div>
            </div>
          ) : null}
          {success ? <Thanku domain={domain} emailCode={emailCode} /> : null}
        </div>
      </div>
    </section>
  );
}

export default Container