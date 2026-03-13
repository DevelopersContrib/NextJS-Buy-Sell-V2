import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBookmark,faBook,faCube } from '@fortawesome/free-solid-svg-icons'

const Footer = ({domain}) => {
  
  return (
    <footer className="tw-text-zinc-400 tw-bg-[#050607] tw-py-12 tw-border-t tw-border-white/[0.06]">
      <div className="container">
        <div className="row tw-align-items-center">
          <div className="col-xl-6 tw-mb-4 tw-mb-xl-0">
            <span className="tw-text-sm">&copy; {new Date().getFullYear()} {domain}. All rights reserved.</span>
          </div>
          <div className="col-xl-6 text-md-end">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item tw-me-4 last:tw-me-0">
                <Link href="/" className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  Home
                </Link>
              </li>
              <li className="list-inline-item tw-me-4">
                <Link href="/about" className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  About
                </Link>
              </li>
              <li className="list-inline-item tw-me-4">
                <Link href="/terms" className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  Terms
                </Link>
              </li>
              <li className="list-inline-item tw-me-4">
                <Link href="/privacy" className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item tw-me-4">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  Build
                </Link>
              </li>
              <li className="list-inline-item tw-me-4">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  Invest
                </Link>
              </li>
              <li className="list-inline-item tw-me-4">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  Manage
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-text-sm tw-text-zinc-400 hover:tw-text-white tw-transition-colors">
                  Monetize
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer