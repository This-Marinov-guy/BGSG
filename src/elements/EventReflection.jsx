import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import BrandTwo from "./BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { useParams } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";

const eventReflectionDetails = [
  {
    title: "Bulgarian Dinner",
    bgImage: "12",
    date: "13th January",
    attendance: "60",
    comments: "20",
    text: `Our first event - a traditional Bulgarian Dinner consisting of 3 courses. The starter was tarator - a "cold soup" made with yogurt and cucumber, the main course was musaka and we finished with chocolate cake for dessert.`,
    images: [
      { id: "1", image: "bulgarian-dinner/06.jpeg", text: "" },
      { id: "2", image: "bulgarian-dinner/09.jpeg", text: "" },
      { id: "3", image: "bulgarian-dinner/10.jpeg", text: "" },
    ],
  },
  {
    title: "Trifon Zarezan | Wine Tasting",
    bgImage: "13",
    date: "14th February",
    attendance: "30",
    comments: "20",
    text: `This event was available only for our members as a welcome event. We celebrated Trifon Zarezan together with a wine tasting event. It involved sampling and evaluating of different types of wines - 3 red wines and 2 white wines. We put our guests in groups of 2 and they had a list of wines and descriptions which they had to put together after tasting each of the wines. The group with the most right answers won a prize which was a special wine bought from Paris.`,
    images: [
      { id: "1", image: "wine-tasting/01.jpeg", text: "" },

      { id: "2", image: "wine-tasting/03.jpeg", text: "" },

      { id: "3", image: "wine-tasting/06.jpeg", text: "" },
    ],
  },
  {
    title: "Freedom Fest",
    bgImage: "14",
    date: "3rd March",
    attendance: "90",
    comments: "50",
    text: `We celebrated the independence day of Bulgaria together by hosting a freedom fest. The event was a party with Bulgarian music which was made for anyone who wanted to get a taste of the Bulgarian culture.`,
    images: [
      { id: "2", image: "freedom-fest/02.jpeg", text: "" },
      { id: "4", image: "freedom-fest/04.jpeg", text: "" },
      { id: "12", image: "freedom-fest/12.jpeg", text: "" },
      { id: "13", image: "freedom-fest/13.jpeg", text: "" },
    ],
  },
];

const EventReflection = (props) => {
  const eventId = useParams().eventId;

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Event Reflection" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
      />

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${
          eventReflectionDetails[Number(eventId)].bgImage
        }`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {eventReflectionDetails[Number(eventId)].title}
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {eventReflectionDetails[Number(eventId)].date}
                  </li>
                  <li>
                    <FiUser />
                    {eventReflectionDetails[Number(eventId)].attendance} people
                  </li>
                  <li>
                    <FiMessageCircle />
                    {eventReflectionDetails[Number(eventId)].comments} Comments
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
                  <p>{eventReflectionDetails[Number(eventId)].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* Start Picture Area */}
      <PhotoGallery target={eventReflectionDetails[Number(eventId)].images} />
      {/* End Picture Area */}

      {/* Start Sponsor Area */}
      <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div>
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
};
export default EventReflection;
