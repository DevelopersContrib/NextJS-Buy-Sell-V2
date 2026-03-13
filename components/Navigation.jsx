"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = ({ domain }) => {
  const [showTopHeader, setShowTopHeader] = useState(true);

  return (
    <>
      {showTopHeader && (
        <div className="tw-bg-[#070809] tw-text-zinc-400 tw-text-sm tw-py-2.5 tw-flex tw-justify-between tw-items-center tw-px-4 lg:tw-px-8 tw-border-b tw-border-white/[0.06]">
          <a
            href="https://www.vnoc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="tw-no-underline tw-text-zinc-400 hover:tw-text-white tw-transition-colors"
          >
            Powered by VNOC
          </a>
          <div className="tw-flex tw-items-center tw-gap-3">
            <Link
              href={`https://contrib.com/to/${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-no-underline tw-text-zinc-400 hover:tw-text-white tw-px-3 tw-py-1.5 tw-rounded-md hover:tw-bg-white/[0.06] tw-transition-colors"
            >
              Register
            </Link>
            <Link
              href="https://adao.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-no-underline tw-text-zinc-400 hover:tw-text-white tw-px-3 tw-py-1.5 tw-rounded-md hover:tw-bg-white/[0.06] tw-transition-colors"
            >
              Buy Adao
            </Link>
            <button
              onClick={() => setShowTopHeader(false)}
              className="tw-text-zinc-500 hover:tw-text-white tw-text-sm tw-bg-transparent tw-border-0 tw-p-1 tw-cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <Navbar expand="lg" className="site-navbar tw-bg-[#070809] tw-border-b tw-border-white/[0.06] tw-py-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="tw-border-white/25 focus:tw-shadow-none" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto tw-gap-6">
              <Link href="/" className="nav-link tw-text-zinc-400 hover:tw-text-white tw-py-2 tw-transition-colors tw-text-[15px]">
                Home
              </Link>
              <Link href="/blog" className="nav-link tw-text-zinc-400 hover:tw-text-white tw-py-2 tw-transition-colors tw-text-[15px]">
                Blog
              </Link>
              <Nav.Link href={`https://www.contrib.com/to/${domain}`} target="_blank" className="tw-text-zinc-400 hover:tw-text-white tw-transition-colors tw-text-[15px]">
                Contribute
              </Nav.Link>
              <Link href="/partner" className="nav-link tw-text-zinc-400 hover:tw-text-white tw-py-2 tw-transition-colors tw-text-[15px]">
                Partner
              </Link>
              <Link href={`https://advertise.ipartner.com/?domain=${domain}`} className="nav-link tw-text-zinc-400 hover:tw-text-white tw-py-2 tw-transition-colors tw-text-[15px]" target="_blank">
                Advertise
              </Link>
              <Link href="/about" className="nav-link tw-text-zinc-400 hover:tw-text-white tw-py-2 tw-transition-colors tw-text-[15px]">
                About
              </Link>
              <Nav.Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} target="_blank" className="tw-text-zinc-400 hover:tw-text-white tw-transition-colors tw-text-[15px]">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
