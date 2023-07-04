import React from "react";
import { FaInstagram, FaFlickr, FaFacebookF } from "react-icons/fa";
import ImageFb from "../../elements/ui/ImageFb";
import packageJson from "../../../package.json";
import Donation from "../../elements/Donation";
import { useDispatch, useSelector } from "react-redux";
import { selectDonation, showDonation } from "../../redux/donation";

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

const FooterTwo = () => {

  const donation = useSelector(selectDonation)
  const dispatch = useDispatch();

  return (
    <div className="footer-style-2 ptb--30 bg_image" data-black-overlay="6">
      {donation && <Donation />}
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="footer-btns">
              <div className="inner">
                <div className="logo text-center text-sm-left mb_sm--20">
                  <a href="/">
                    <ImageFb
                      style={{ borderRadius: "50%" }}
                      src="/assets/images/logo/logo.webp"
                      fallback="/assets/images/logo/logo.png"
                      alt="Logo images"
                    />
                  </a>
                </div>
              </div>
              <button className="rn-button-style--2 btn-bul" onClick={() => dispatch(showDonation())}>Support us</button>
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
              <p className="information">{`Version ${packageJson.version}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
