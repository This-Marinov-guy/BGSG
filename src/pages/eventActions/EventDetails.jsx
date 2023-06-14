import React, { useEffect, useState } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user";
import { useObjectGrabUrl } from "../../hooks/object-hook";
import { OPEN_SOCIETY_EVENTS } from "../../util/EVENTS";
import ImageFb from "../../elements/ui/ImageFb";
import Countdown from "../../elements/ui/Countdown";

const EventDetails = () => {
  const [eventClosed, setEventClosed] = useState(false)

  const user = useSelector(selectUser);

  const target = useObjectGrabUrl(OPEN_SOCIETY_EVENTS);

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Event Details" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${target.bgImage}`}
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
                  <p className="subtitle">{target.title}</p>
                  {target.text.map((value, index) => {
                    return <p key={index}>{value}</p>
                  })}

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
                      {target.entry || target.memberEntry ? <h4>
                        {user.token
                          ? target.memberEntry + ' euro ' + (target.including ? target.including[0] : '')
                          : target.entry + ' euro ' + (target.including ? target.including[1] : '') }
                      </h4> : <h4 >Check ticket portal</h4>}
                    </div>
                  </div>
                  {target.ticket_link ? <div><a
                    style={eventClosed ? { pointerEvents: 'none', backgroundColor: '#ccc' } : {}}
                    href={target.ticket_link}
                    target="_blank"
                    className="rn-button-style--2 btn-solid mt--80"
                  >
                    {eventClosed ? "Sold out" : 'Buy Ticket'}
                  </a>
                    <p className="information mt--20">*Tickets are purchased from an outside platform! Click the button to be redirected</p></div> : <a
                      style={eventClosed ? { pointerEvents: 'none', backgroundColor: '#ccc' } : {}}
                      href={
                        user.token
                          ? `/purchase-ticket/${target.title}/${user.userId}`
                          : `/purchase-ticket/${target.title}`
                      }
                      className="rn-button-style--2 btn-solid"
                    >
                    {eventClosed ? "Sold out" : 'Buy Ticket'}
                  </a>}
                  {target.ticketTimer && <Countdown targetTime={target.ticketTimer} setEventClosed={setEventClosed} />}
                  {/* {target.ticketPool && <h3>Tickets remaining: {target.ticketPool}</h3>} */}
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
                <div className="portfolio-thumb-inner row">

                  {target.images.map((value, index) => {
                    return <div key={index} className="col-lg-6 col-md-12 col-12 thumb center_div mb--30">
                      <ImageFb src={`${value}.webp`} fallback={`${value}.jpg`}
                        alt="Portfolio Images" />
                    </div>

                  })}
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
