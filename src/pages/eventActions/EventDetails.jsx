import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user";
import { useObjectGrabUrl } from "../../hooks/object-hook";

const EventDetails = (props) => {
  const user = useSelector(selectUser);

  const target = useObjectGrabUrl(props.openSocietyEvents);

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Portfolio Details" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--1`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{target.title}</h2>
                <p>{target.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>About</h2>
                  <p className="subtitle">{target.text[0]}</p>
                  <p>{target.text[1]}</p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>When</span>
                      <h4>{target.date + ", " + target.time}</h4>
                      {target.correctedDate && (
                        <p style={{ color: "#f80707" }} className="error">
                          {"Updated Date -> " + target.correctedDate}
                        </p>
                      )}
                      {target.correctedTime && (
                        <p style={{ color: "#f80707" }} className="error">
                          {"Updated Time -> " + target.correctedTime}
                        </p>
                      )}
                    </div>

                    <div className="port-view">
                      <span>Where</span>
                      <h4>{target.where}</h4>
                    </div>

                    <div className="port-view">
                      <span>Entry fee</span>
                      <h4>
                        {user.token
                          ? target.memberEntry + " euro (discounted)"
                          : target.entry + " euro"}
                      </h4>
                    </div>
                  </div>
                  <a
                    href={
                      user.token
                        ? `/purchase-ticket/${target.title}/${user.userId}`
                        : `/purchase-ticket/${target.title}`
                    }
                    className="rn-button-style--2 btn-solid"
                  >
                    Buy Ticket
                  </a>
                </div>
                <br />
                {/* Start Contact Map  */}
                <div className="container">
                  <div className="rn-contact-map-area position-relative">
                    {/* <div style={{ height: "450px", width: "100%" }}>
                      <GoogleMapReact
                        defaultCenter={eventDetails[0].center}
                        defaultZoom={eventDetails[0].zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text="My Marker"
                        />
                      </GoogleMapReact>
                    </div> */}
                  </div>
                </div>
                {/* End Contact Map  */}
                <br />
                <div className="portfolio-thumb-inner">
                  <div className="thumb position-relative mb--30">
                    <img src={target.images[0]} alt="Portfolio Images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

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
};
export default EventDetails;