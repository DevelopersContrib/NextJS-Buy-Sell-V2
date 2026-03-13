"use client";

import React from 'react';
import Image from 'next/image';

const StaticCTAButton = () => {
  return (
    <section
      className="tw-pt-16 tw-pb-16 tw-px-4 tw-bg-cover tw-bg-center tw-bg-no-repeat"
      style={{
        backgroundImage: "url('/images/dark-overlay.png')",
        backgroundColor: "#08090A",
      }}
    >
      <style jsx>{`
        .tw-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `}</style>
      <div
        className="container mx-auto px-4 text-center tw-py-12 tw-px-6 md:tw-py-16 tw-rounded-xl tw-max-w-4xl tw-transition-all tw-duration-200 hover:tw-border-[#3f4040]"
        style={{
          backgroundColor: "#0f1011",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div className="relative mb-6">
          <Image
            src="/images/adaotoken.png"
            alt="ADAO Token"
            width={50}
            height={50}
            className="tw-bounce"
          />
        </div>
        <h2 className="tw-text-xl md:tw-text-3xl tw-font-semibold tw-tracking-tight tw-mb-4 tw-text-white">
          Seize the future with ADAO Tokens
        </h2>
        <p className="tw-text-sm md:tw-text-base tw-text-zinc-400 tw-mb-10 tw-max-w-xl tw-mx-auto tw-leading-relaxed">
          Don&apos;t miss your chance to be part of the next big leap in digital innovation. Secure
          your tokens today and join a community shaping the future of decentralized technology.
        </p>
        <button
          className="tw-bg-white tw-text-[#08090A] tw-font-medium tw-text-sm tw-px-6 tw-py-3 tw-rounded-lg hover:tw-bg-zinc-200 tw-transition-colors"
          onClick={() => window.open("https://adao.ai", "_blank")}
        >
          Buy ADAO Tokens
        </button>
      </div>
    </section>
  );
};

export default StaticCTAButton;