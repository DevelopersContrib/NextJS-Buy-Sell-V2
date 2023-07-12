import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import TopDomainsComponent from '../components/TopDomainsComponent';
import { getData, getDomain, getScript, getTopsites } from "../lib/data";
import Ai from "../components/Ai";
import ScriptLoader from "../components/ScriptLoader";
import Image from "next/image";
import FormOptions from "../components/Home/Form";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const topDomains = await getTopsites();
  const background =
    c.data.background_url !== null
      ? c.data.background_url
      : "https://cdn.vnoc.com/background/tech4.jpg";
  const html = await getScript(
    "https://e7lq80c199.execute-api.us-west-2.amazonaws.com/api1?key=5c1bde69a9e783c7edc2e603d8b25023&request=getcontent&url=" +
    encodeURIComponent(domain)
  );

  return (
    <>
      <Navigation domain={domain} />
      <section
        style={{ backgroundImage: `url('${background}')` }}
        className="tw-bg-cover tw-bg-no-repeat tw-relative tw-text-white tw-bg-[50%] tw-py-12 tw-flex tw-w-full tw-items-center"
      >
        <div className="tw-bg-[rgba(3,38,51,0.85)] tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-absolute"></div>
        <div className="container tw-relative">
          <div className="row tw-mb-8">
            <div className="col-xl-8">
              <Logo domain={domain} logo={c.data.logo} />
            </div>
            <div className="col-xl-4 tw-relative">
              <FormOptions domain={domain} />
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-12 tw-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <p>
                Your site is a reflection of your brand, invest in an impactful
                domain name like Euroinvestment.com that projects your voice.
                You can make an offer, partner, lease or join the
                Euroinvestment.com team today at Contrib.
              </p>
              <p>
                Our Contrib community has 150,000+ contributors who share their
                original content for Euroinvestment.com.
              </p>
              <div className="pt-lg-3 row">
                <div className="text-center mb-3 col-lg-4">
                  <Image
                    width="80"
                    height="135"
                    className="img-fluid tw-m-h-[135px]"
                    src="https://cdn.vnoc.com/icons/icon-diamond.png"
                    alt="Make an offer"
                  />
                  <h4>Make An Offer</h4>
                  <p className="small">
                    Find a domain and decide to buy,lease or rent it. Submit
                    your best offer for the owner&apos;s consideration.
                  </p>
                </div>
                <div className="text-center mb-3 col-lg-4">
                  <Image
                    width="80"
                    height="135"
                    className="img-fluid tw-m-h-[135px]"
                    src="https://cdn.vnoc.com/icons/icon-briefcase.png"
                    alt="Negotiate the price"
                  />
                  <h4>Negotiate the price</h4>
                  <p className="small">
                    Your offer may be accepted, countered or declined.
                    Negotiations can take as little as one day or up to a few
                    weeks.
                  </p>
                </div>
                <div className="text-center mb-3 col-lg-4">
                  <Image
                    width="80"
                    height="135"
                    className="img-fluid tw-m-h-[135px]"
                    src="https://cdn.vnoc.com/icons/icon-handshake.png"
                    alt="Make a deal"
                  />
                  <h4>Make a deal</h4>
                  <p className="small">
                    Once you have agreed on the price, We will facilitate the
                    contract, payment and transfer or use of the domain name.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-12 tw-bg-[#fafafa]">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <h2 className='tw-font-medium tw-text-5xl text-uppercase text-center mb-3'>
                {domain} partners
              </h2>
            </div>
            <div className="col-xl-4 offset-xl-8">
              <div className="card text-bg-light mb-3">
                <div className="card-header">Latest Contribution</div>
                <div className="card-body tw-overflow-y-auto tw-max-h-[350px]">
                  <ul className="list-unstyled">
                    <li>
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
                          <p className='small mb-0'>
                            Has contributed marketing on &nbsp;{" "}
                            <a href='/'>staffingnetworks.com</a>
                          </p>
                          <p className='text-danger tw-font-semibold'>20 pts</p>
                        </div>
                      </div>
                    </li>
                    <li>
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
                          <p className='small mb-0'>
                            Has contributed marketing on &nbsp;{" "}
                            <a href='/'>staffingnetworks.com</a>
                          </p>
                          <p className='text-danger tw-font-semibold'>20 pts</p>
                        </div>
                      </div>
                    </li>
                    <li>
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
                          <p className='small mb-0'>
                            Has contributed marketing on &nbsp;{" "}
                            <a href='/'>staffingnetworks.com</a>
                          </p>
                          <p className='text-danger tw-font-semibold'>20 pts</p>
                        </div>
                      </div>
                    </li>
                    <li>
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
                          <p className='small mb-0'>
                            Has contributed marketing on &nbsp;{" "}
                            <a href='/'>staffingnetworks.com</a>
                          </p>
                          <p className='text-danger tw-font-semibold'>20 pts</p>
                        </div>
                      </div>
                    </li>
                    <li>
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
                          <p className='small mb-0'>
                            Has contributed marketing on &nbsp;{" "}
                            <a href='/'>staffingnetworks.com</a>
                          </p>
                          <p className='text-danger tw-font-semibold'>20 pts</p>
                        </div>
                      </div>
                    </li>
                    <li>
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
                          <p className='small mb-0'>
                            Has contributed marketing on &nbsp;{" "}
                            <a href='/'>staffingnetworks.com</a>
                          </p>
                          <p className='text-danger tw-font-semibold'>20 pts</p>
                        </div>
                      </div>
                    </li>
                    <li>
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
                          <p className='small mb-0'>
                            Has contributed marketing on &nbsp;{" "}
                            <a href='/'>staffingnetworks.com</a>
                          </p>
                          <p className='text-danger tw-font-semibold'>20 pts</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopDomainsComponent domains={topDomains} />
      <section className="tw-bg-gray-100 tw-py-12">
        <div className="container">
          <Ai />
        </div>
      </section>
      <ScriptLoader html={html.data.content} />
      <Footer domain={domain} />
    </>
  );
}
