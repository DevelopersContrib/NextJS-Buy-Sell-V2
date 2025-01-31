import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBookmark,faBook,faCube } from '@fortawesome/free-solid-svg-icons'

const Footer = ({domain}) => {
  
  return (
    <footer className="tw-text-white tw-bg-black tw-py-6">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            &copy; {new Date().getFullYear()} {domain}. All Rights Reserved.
          </div>
          <div className="col-xl-6 text-md-end">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item">
                <Link href="/" className="tw-no-underline tw-capitalize tw-text-gray hover:tw-text-white/75">
                  home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/about" className="tw-no-underline tw-capitalize tw-text-white hover:tw-text-white/75">
                  about us
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/terms" className="tw-no-underline tw-capitalize tw-text-white hover:tw-text-white/75">
                  terms
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/privacy" className="tw-no-underline tw-capitalize tw-text-white hover:tw-text-white/75">
                  privacy
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-capitalize tw-text-white hover:tw-text-white/75">
                  build
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-capitalize tw-text-white hover:tw-text-white/75">
                  invest
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-capitalize tw-text-white hover:tw-text-white/75">
                  manage
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="tw-no-underline tw-capitalize tw-text-white hover:tw-text-white/75">
                  monetize
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