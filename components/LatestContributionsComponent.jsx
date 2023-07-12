"use client"
import Image from "next/image";
import useEffect from "react";
import LoadingState from "./LoadingState";

const ContributionComponent = ({contributions}) => {
  return (
    <div className="col-xl-4 offset-xl-8">
      <div className="card text-bg-light mb-3">
        <div className="card-header">Latest Contribution</div>
        <div className="card-body tw-overflow-y-auto tw-max-h-[350px]">
          <ul className="list-unstyled">
            {
              !contributions ? <LoadingState />:(
                contributions.data.map(c => {
                  <li key={c.MemberId}>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <Image
                          src="https://contrib.com/img/timthumb.php?src=https://www.contrib.com/img/avatar0.jpg&w=115&h=115"
                          width={65}
                          height={65}
                          alt=""
                          className="tw-object-cover"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="text-capitalize mt-0">john doe</h5>
                        <p className="small mb-0">
                          Has contributed marketing on &nbsp;{" "}
                          <a href="/">staffingnetworks.com</a>
                        </p>
                        <p className="text-danger tw-font-semibold">20 pts</p>
                      </div>
                    </div>
                  </li>
                })
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContributionComponent;
