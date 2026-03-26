"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DEFAULT_PARTNER_TYPE = "Sponsorship Marketing Partnerships";

const Form = ({ domain }) => {
  const [selectedOption, setSelectedOption] = useState("buy");
  const [offerAmount, setOfferAmount] = useState("10000");
  const [url, setUrl] = useState(`/${selectedOption}?offer=${offerAmount}`);
  const [partnerType, setPartnerType] = useState(DEFAULT_PARTNER_TYPE);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOfferAmountChange = (event) => {
    setOfferAmount(event.target.value);
  };

  const handlePartnerTypeChange = (event) => {
    setPartnerType(event.target.value);
  };

  useEffect(() => {
    if (selectedOption === "buy") {
      setUrl(`/${selectedOption}?offer=${offerAmount}`);
    } else if (selectedOption === "partner") {
      setUrl(`/${selectedOption}?type=${encodeURIComponent(partnerType)}`);
    }
  }, [selectedOption, offerAmount, partnerType]);

  const NextIcon = () => (
    <svg className="tw-w-5 tw-h-5 tw-ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  const ctaClass =
    "buy-form-cta tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-py-3 tw-px-4 tw-rounded-lg tw-font-semibold tw-text-[15px] tw-text-white tw-transition-colors tw-no-underline";

  const offerDisplay = Number(offerAmount || 0).toLocaleString();

  return (
    <div className="buy-form">
      <div className="buy-form-header">
        <span className="tw-inline-block tw-text-[10px] tw-uppercase tw-tracking-widest tw-text-zinc-500 tw-bg-white/[0.08] tw-px-2.5 tw-py-1 tw-rounded-md tw-mb-3">
          Start here
        </span>
        <h4 className="tw-font-semibold tw-text-xl tw-tracking-tight tw-text-white tw-mb-1">
          Get this domain
        </h4>
        <p className="tw-mb-1 tw-text-sm tw-leading-snug tw-text-zinc-400">
          Choose an option — quick and easy, no commitment.
        </p>
        <p className="tw-mb-0 tw-text-xs tw-leading-relaxed tw-text-zinc-500">
          Join 150,000+ contributors already on Contrib.
        </p>
      </div>
      <div className="buy-form-body">
        <div className="buy-options">
          <div className={`buy-option-item ${selectedOption === "buy" ? "active" : ""}`}>
            <label
              className={`form-check-label buy-options-check ${selectedOption === "buy" ? "active" : ""}`}
              htmlFor="optionsBuy"
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="optionsBuy"
                value="buy"
                checked={selectedOption === "buy"}
                onChange={handleOptionChange}
              />
              <span className="buy-options-check-label">Make an offer</span>
              <span className="buy-form-amount">USD ${offerDisplay}</span>
            </label>
            <div className="buy-lease-offer-input">
              <input
                name="offer_amount"
                type="number"
                min={0}
                inputMode="decimal"
                className="form-control"
                placeholder="Offer in USD"
                value={offerAmount}
                onChange={handleOfferAmountChange}
              />
            </div>
          </div>

          <div className={`buy-option-item ${selectedOption === "partner" ? "active" : ""}`}>
            <label
              className={`form-check-label buy-options-check ${selectedOption === "partner" ? "active" : ""}`}
              htmlFor="optionsPartner"
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="optionsPartner"
                value="partner"
                checked={selectedOption === "partner"}
                onChange={handleOptionChange}
              />
              <span className="buy-options-check-label">Partner</span>
            </label>
            <div className="buy-lease-offer-input">
              <label htmlFor="partner_type_select" className="tw-sr-only">
                Partnership type
              </label>
              <select
                id="partner_type_select"
                name="partner_type"
                className="form-select"
                value={partnerType}
                onChange={handlePartnerTypeChange}
              >
                <option value="Sponsorship Marketing Partnerships">Sponsor Marketing Partnerships</option>
                <option value="Distribution Marketing Partnerships">Distribution Marketing Partnerships</option>
                <option value="Affiliate Marketing Partnerships">Affiliate Marketing Partnerships</option>
                <option value="Added Value Marketing Partnerships">Added Value Marketing Partnerships</option>
              </select>
              <p className="tw-mt-2 tw-mb-0 tw-text-[11px] tw-leading-relaxed tw-text-zinc-500">
                You can change this before continuing. Default is sponsor-style partnerships.
              </p>
            </div>
          </div>

          <div className={`buy-option-item ${selectedOption === "join" ? "active" : ""}`}>
            <label
              className={`form-check-label buy-options-check ${selectedOption === "join" ? "active" : ""}`}
              htmlFor="optionsJoin"
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="optionsJoin"
                value="join"
                checked={selectedOption === "join"}
                onChange={handleOptionChange}
              />
              <span className="buy-options-check-label">Join Team</span>
            </label>
          </div>
        </div>
        <div className="buy-form-button d-grid tw-gap-0">
          <Link id="buy" className={`${ctaClass} ${selectedOption === "buy" ? "" : "d-none"}`} href={url}>
            Continue <NextIcon />
          </Link>
          <Link
            id="partner"
            className={`${ctaClass} ${selectedOption === "partner" ? "" : "d-none"}`}
            href={`/partner?type=${encodeURIComponent(partnerType)}`}
          >
            Continue <NextIcon />
          </Link>
          <a
            id="join"
            className={`${ctaClass} ${selectedOption === "join" ? "" : "d-none"}`}
            href={`https://www.contrib.com/signup/firststep?domain=${domain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue <NextIcon />
          </a>
        </div>
      </div>
      <div className="buy-form-footer">
        <p className="tw-mb-2 tw-text-center tw-text-xs tw-text-zinc-500">Accepted payment methods</p>
        <ul className="mb-0 list-inline tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-x-5 tw-gap-y-3">
          <li className="list-inline-item">
            <Image height="24" width="64" src="https://cdn.vnoc.com/icons/frameworks/paypal.svg" alt="PayPal" />
          </li>
          <li className="list-inline-item">
            <Image height="24" width="64" src="https://cdn.vnoc.com/icons/frameworks/bitcoin-sv-1.svg" alt="Bitcoin SV" />
          </li>
          <li className="list-inline-item">
            <Image height="24" width="64" src="https://cdn.vnoc.com/icons/frameworks/binance-coin-bnb.svg" alt="BNB" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
