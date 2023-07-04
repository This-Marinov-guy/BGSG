import React, { Component } from "react";
import { FaInstagram, FaFlickr, FaFacebookF } from "react-icons/fa";
import packageJson from "../../../package.json";
import Donation from "../../elements/Donation";

const SocialShare = [
  {
    Social: <FaInstagram />,
    link: "https://www.instagram.com/bulgariansociety.gro/?igshid=YmMyMTA2M2Y%3D",
  },
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100090061861023",
  },
  {
    Social: <FaFlickr />,
    link: "https://flickr.com/photos/197725983@N03/albums",
  },
];
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Donation />
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Have a Question?</span>
                    <h2>
                      Do not <br />
                      hesitate to contact us
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Quick Link</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/past-events">Events</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                          <li>
                            <a href="/rules-and-regulations" target="_blank">
                              Terms and policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Find us</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:bulgariansociety.gro@gmail.com">
                              bulgariansociety.gro@gmail.com
                            </a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © 2022 Bulgarian Society Groningen. All
                          Rights Reserved.
                        </p>

                        <p className="information">{`Version ${packageJson.version}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
