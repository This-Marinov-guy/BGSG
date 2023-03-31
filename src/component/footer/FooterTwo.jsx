import React from "react";
import { FaInstagram, FaFlickr, FaFacebookF } from "react-icons/fa";

const SocialShare = [
  { Social: <FaInstagram />, link: "https://flickr.com/photos/197725983@N03" },
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100090061861023",
  },
  {
    Social: <FaFlickr />,
    link: "https://www.instagram.com/bulgariansociety.gro/?igshid=YmMyMTA2M2Y%3D",
  },
];

const FooterTwo = () => {
  return (
    <div className="footer-style-2 ptb--30 bg_image" data-black-overlay="6">
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/home-one">
                  <img
                    style={{ borderRadius: "50%" }}
                    src="/assets/images/logo/logo.png"
                    alt="Logo images"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>
                  Copyright © 2022 Bulgarian Society Groningen. All Rights
                  Reserved.
                </p>
              </div>
              <div style={{fontSize:'15px'}} className="information">Fonts provided from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> and licensed by CC BY 3.0</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
