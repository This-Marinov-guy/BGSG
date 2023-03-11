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

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class PortfolioDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
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
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Freedom Fest</h2>
                  <p>National Day of Bulgaria</p>
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
                    <p className="subtitle">A party like no other</p>
                    <p>
                      We will provide drinks and snacks for our socity. Music
                      and great spirit will crowd the dance floor as we promise
                      this will be an unforgetable experience that will be
                      talked about for weeks after! Do not waste time and book
                      your spot
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>When</span>
                        <h4>3/2/2023, 8:00pm</h4>
                      </div>

                      <div className="port-view">
                        <span>Where</span>
                        <h4>Business Hall</h4>
                      </div>

                      <div className="port-view">
                        <span>Entry fee</span>
                        <h4>8 euro</h4>
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
                      <div style={{ height: "450px", width: "100%" }}>
                        <GoogleMapReact
                          defaultCenter={this.props.center}
                          defaultZoom={this.props.zoom}
                        >
                          <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                          />
                        </GoogleMapReact>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Map  */}
                  <br />
                  <div className="portfolio-thumb-inner">
                    <div className="thumb position-relative mb--30">
                      <img
                        src="/assets/images/portfolio/portfolio-big-01.jpg"
                        alt="Portfolio Images"
                      />
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="ZOoVOfieAF8"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button
                        className="video-popup position-top-center"
                        onClick={this.openModal}
                      >
                        <span className="play-icon"></span>
                      </button>
                    </div>

                    <div className="thumb mb--30">
                      <img
                        src="/assets/images/portfolio/portfolio-big-01.jpg"
                        alt="Portfolio Images"
                      />
                    </div>

                    <div className="thumb">
                      <img
                        src="/assets/images/portfolio/portfolio-big-01.jpg"
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
  }
}
export default PortfolioDetails;
