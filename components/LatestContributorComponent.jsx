import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';

const LatestContributorComponent = () => {
  return (
    <div className="card text-bg-light mb-3">
      <div className="card-header">Latest Contributor</div>
      <div className="card-body tw-overflow-y-auto tw-max-h-[350px]">
        <ul className="list-unstyled">
          <li>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image
                  src="https://www.contrib.com/img/avatar0.jpg"
                  width={65}
                  height={65}
                  alt=""
                  className="tw-object-cover"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <ul className="list-inline mb-1">
                  <li className="list-inline-item">
                    <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-sm tw-text-white">
                      design &amp; multimedia
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-sm tw-text-white ">
                      graphics UI
                    </div>
                  </li>
                </ul>
                <p className="small mb-0">
                  <FontAwesomeIcon icon={faMapLocationDot} className="tw-mr-2 tw-text-gray-400" />
                  Netherlands, Amsterdam
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LatestContributorComponent