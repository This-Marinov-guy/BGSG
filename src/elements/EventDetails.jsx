import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import GoogleMapReact from "google-map-react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { useParams } from "react-router-dom";

const eventDetails = [
  {
    id: '0',
    title: "Freedom Fest",
    description: "National day of Bulgaria",
    bgImage: "4",
    when: "3.3.2023, 20:00",
    where: "Business Hall",
    entry: 8,
    text: [
      "Wild party",
      "We will provide drinks and snacks for our socity. Music and great spirit will crowd the dance floor as we promisethis will be an unforgetable experience that will be talked about for weeks after! Do not waste time and bookyour spot",
    ],
    images: ["portfolio-big-01.jpg"],
  },
];

const EventDetails = (props) => { 
  const eventId = useParams().eventId;
  
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
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${eventDetails[Number(eventId)].bgImage}`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{eventDetails[Number(eventId)].title}</h2>
                <p>{eventDetails[Number(eventId)].description}</p>
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
                  <p className="subtitle">{eventDetails[Number(eventId)].text[0]}</p>
                  <p>{eventDetails[Number(eventId)].text[1]}</p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>When</span>
                      <h4>{eventDetails[Number(eventId)].when}</h4>
                    </div>

                    <div className="port-view">
                      <span>Where</span>
                      <h4>{eventDetails[Number(eventId)].where}</h4>
                    </div>

                    <div className="port-view">
                      <span>Entry fee</span>
                      <h4>{eventDetails[Number(eventId)].entry} euro</h4>
                    </div>
                  </div>
                  <a
                    href="/purchase-ticket"
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
                    <img
                      src={`/assets/images/portfolio/${eventDetails[Number(eventId)].images[0]}`}
                      alt="Portfolio Images"
                    />
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
