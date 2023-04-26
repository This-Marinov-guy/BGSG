import React from "react";
import PageHelmet from "../component/common/Helmet";
import { FiClock, FiUser, FiMessageCircle } from "react-icons/fi";
import BrandTwo from "./BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import PhotoGallery from "./PhotoGallery";
import { useObjectGrabUrl } from "../hooks/object-hook";
import { EVENT_REFLECTION_DETAILS } from "../util/EVENTS";

const EventReflection = React.memo(() => {
  const target = useObjectGrabUrl(EVENT_REFLECTION_DETAILS);

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Event Reflection" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
      />

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${target.bgImage}`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {target.secondTitle
                    ? target.title + target.secondTitle
                    : target.title}
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {target.date}
                  </li>
                  <li>
                    <FiUser />
                    {target.attendance} People
                  </li>
                  <li>
                    <FiMessageCircle />
                    {target.comments} Comments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <h2 className="title">Event Description</h2>
                <div className="inner mt--80">
                  {target.text.map((value, index) => {
                    return <p key={index}>{value}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* Start Picture Area */}
      <PhotoGallery target={target.images} />
      {/* End Picture Area */}

      {/* Start Sponsor Area */}

      {/* End Sponsor Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
});
export default EventReflection;
