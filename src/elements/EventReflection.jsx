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

const eventReflectionDetails = [
  {
    title: "Bulgarian Dinner",
    bgImage: "12",
    date: "13th January",
    attendance: "60",
    comments: "20",
    text: [
      `Our first event - a traditional Bulgarian Dinner consisting of 3 courses. The starter was tarator - a "cold soup" made with yogurt and cucumber, the main course was musaka and we finished with chocolate cake for dessert.`,
    ],
    images: [
      { id: "1", image: "bulgarian-dinner/06.jpeg", text: "" },
      { id: "2", image: "bulgarian-dinner/09.jpeg", text: "" },
      { id: "3", image: "bulgarian-dinner/10.jpeg", text: "" },
    ],
  },
  {
    title: "Trifon Zarezan",
    secondTitle: " | Wine Tasting",
    bgImage: "13",
    date: "14th February",
    attendance: "30",
    comments: "20",
    text: [
      `This event was available only for our members as a welcome event. We celebrated Trifon Zarezan together with a wine tasting event. It involved sampling and evaluating of different types of wines - 3 red wines and 2 white wines. We put our guests in groups of 2 and they had a list of wines and descriptions which they had to put together after tasting each of the wines. The group with the most right answers won a prize which was a special wine bought from Paris.`,
    ],
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
    text: [
      `We celebrated the independence day of Bulgaria together by hosting a freedom fest. The event was a party with Bulgarian music which was made for anyone who wanted to get a taste of the Bulgarian culture.`,
    ],
    images: [
      { id: "2", image: "freedom-fest/02.jpeg", text: "" },
      { id: "4", image: "freedom-fest/04.jpeg", text: "" },
      { id: "12", image: "freedom-fest/12.jpeg", text: "" },
      { id: "13", image: "freedom-fest/13.jpeg", text: "" },
    ],
  },
  {
    title: "Entrepreneur Series",
    bgImage: "4",
    date: "16th March / 22th April",
    attendance: "17 / 25",
    comments: "30",
    text: [
      `Henri holds a Bachelors Degree in Philosophy and Political Science and will be Graduating with Honours and an LLB in International and European Technology Law in June 2023. Beside his studies, he has managed and owns two successful businesses - Revista Coffee and Moonshadow Sailing. Hs has been the VP for marketing and the President of the European Law Student Association, Groningen. His areas of expertise include small-business management, critical thinking, public speaking, and competition law. His lecture was about his legacy so far, how he founded his business and the advice he wanted to give to any future and present entrepreneur. `,
      `The second one was about Toni, a 21-year old student and entrepreneur from Bulgaria, was our guest in our Entrepreneurship series where people share their stories about developing their own projects and businesses. Toni has experience with organizing parties at Toni’s Villa, has his own clothing brand - Yunak Brand, as well as a successful podcast and a Youtube channel (@tonienchev). He shared his experience and motivated students to follow their passion by taking small steps towards bigger goals`,
    ],
    images: [
      { id: "1", image: "entrepreneur-series/ent-I.png", text: "" },
      { id: "2", image: "entrepreneur-series/ent-II.png", text: "" },
    ],
  },
  {
    title: "Easter Lunch",
    bgImage: "18",
    date: "16th April",
    attendance: "25",
    comments: "10",
    text: [
      `To celebrate the Orthodox Easter we organized an Easter Lunch including a chicken soup, sarmi, snow white salad and kozunak - traditional Bulgarian dishes. Part of the event was also the Eastern tradition of painting eggs.`,
    ],
    images: [
      { id: "1", image: "easter/1.jpg", text: "" },
      { id: "2", image: "easter/2.jpg", text: "" },
      { id: "3", image: "easter/3.jpg", text: "" },
    ],
  },
];

const EventReflection = React.memo(() => {
  const target = useObjectGrabUrl(eventReflectionDetails);

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
