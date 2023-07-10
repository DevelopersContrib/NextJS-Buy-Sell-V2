"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('offer');
  const [offerAmount, setOfferAmount] = useState('10000');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOfferAmountChange = (event) => {
    setOfferAmount(event.target.value);
  };
  return (
    <>
      <div className="buy-form">
        <div className="buy-form-header">
          <h4 className="tw-font-extrabold tw-text-2xl mb-3">Get this domain</h4>
        </div>
        <div className="buy-form-body">
          <div className="buy-options">
            <div className={`buy-option-item ${selectedOption === 'offer' ? 'active' : ''}`}>
              <label className={`form-check-label buy-options-check lease-checkbox ${selectedOption === 'offer' ? 'active' : ''}`} htmlFor="optionsBuy">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="optionsBuy"
                  value="offer"
                  checked={selectedOption === 'offer'}
                  onChange={handleOptionChange}
                />
                Make an offer
                <span className="buy-form-amount ms-auto text-primary">
                  USD $10000
                </span>
              </label>
              <div className="buy-lease-offer-input">
                <input
                  name="offer_amount"
                  type="number"
                  className="form-control"
                  placeholder="My offer in USD"
                  value={offerAmount}
                  onChange={handleOfferAmountChange}
                />
              </div>
            </div>

            <div className={`buy-option-item ${selectedOption === 'partner' ? 'active' : ''}`}>
              <label className={`form-check-label buy-options-check lease-checkbox ${selectedOption === 'partner' ? 'active' : ''}`} htmlFor="optionsPartner">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="optionsPartner"
                  value="partner"
                  checked={selectedOption === 'partner'}
                  onChange={handleOptionChange}
                />
                Partner
              </label>
              <div className="buy-lease-offer-input">
                <select name="partner_type" className="form-select">
                  <option value="" disabled="">
                    Type of Partnership
                  </option>
                  <option value="Sponsorship Marketing Partnerships">Sponsor Marketing Partnerships</option>
                  <option value="Distribution Marketing Partnerships">Distribution Marketing Partnerships</option>
                  <option value="Affiliate Marketing Partnerships">Affiliate Marketing Partnerships</option>
                  <option value="Added Value Marketing Partnerships">Added Value Marketing Partnerships</option>
                </select>
              </div>
            </div>

            <div className={`buy-option-item ${selectedOption === 'join' ? 'active' : ''}`}>
              <label className={`form-check-label buy-options-check ${selectedOption === 'join' ? 'active' : ''}`} htmlFor="optionsJoin">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="optionsJoin"
                  value="join"
                  checked={selectedOption === 'join'}
                  onChange={handleOptionChange}
                />
                Join Team
              </label>
            </div>
          </div>
          <div className="buy-form-button d-grid">
            <Link id="buy" className={`btn btn-primary py-3 ${selectedOption === 'offer' ? '' : 'd-none'}`} href="/buy?offer=10000">
              Next
              <svg
                className="tw-w-6 tw-h-6 ms-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link id="partner" className={`btn btn-primary py-3 ${selectedOption === 'partner' ? '' : 'd-none'}`} href="/partner?type=Sponsorship Marketing Partnerships">
              Next
              <svg
                className="tw-w-6 tw-h-6 ms-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <a id="join" className={`btn btn-primary py-3 ${selectedOption === 'join' ? '' : 'd-none'}`} href="https://www.contrib.com/signup/firststep?domain=euroinvestment.com">
              Next
              <svg
                className="tw-w-6 tw-h-6 ms-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="buy-form-footer">
          <ul className="list-inline mb-0 text-center">
            <li className="list-inline-item">
              <div className="box-mode-pay">
                <Image
                  height="30"
                  width="80"
                  src="https://cdn.vnoc.com/icons/frameworks/paypal.svg" alt="" />
              </div>
            </li>
            <li className="list-inline-item">
              <div className="box-mode-pay">
                <Image
                  height="30"
                  width="80"
                  src="https://cdn.vnoc.com/icons/frameworks/bitcoin-sv-1.svg" alt="" />
              </div>
            </li>
            <li className="list-inline-item">
              <div className="box-mode-pay">
                <Image
                  height="30"
                  width="80"
                  src="https://cdn.vnoc.com/icons/frameworks/binance-coin-bnb.svg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Form