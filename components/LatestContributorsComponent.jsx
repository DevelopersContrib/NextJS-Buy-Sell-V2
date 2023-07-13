import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import LoadingState from "./LoadingState";

const LatestContributorComponent = ({ contributors }) => {
  return (
    <div className="card text-bg-light mb-3">
      <div className="card-header">Latest Contributor</div>
      <div className="card-body tw-overflow-y-auto tw-max-h-[350px]">
        <ul className="list-unstyled">
          {
            !contributors ? <LoadingState /> : (
              contributors.data.map((c, index) => (
                <li key={index}>
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={!c.profile_image ? 'https://contrib.com/img/timthumb.php?src=https://www.contrib.com/img/avatar0.jpg&w=115&h=115' : 'https://www.contrib.com/img/timthumb.php?src=uploads/profile/' + c.profile_image + '&w=115&h=115'}
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
                            {c.role_name}
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-sm tw-text-white ">
                            {c.industry_name}
                          </div>
                        </li>
                      </ul>
                      <p className="small mb-0">
                        <FontAwesomeIcon icon={faMapLocationDot} className="tw-mr-2 tw-text-gray-400" />
                        {c.country}
                      </p>
                    </div>
                  </div>
                </li>
              ))
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default LatestContributorComponent