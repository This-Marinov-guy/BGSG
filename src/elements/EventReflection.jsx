import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import BrandTwo from "./BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const EventReflection = (props) => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Event Reflection" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
      />

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${props.event.bgImage}`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  Reflection <br /> on {props.event.title}
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {props.event.date}
                  </li>
                  <li>
                    <FiUser />
                    {props.event.attendance} people
                  </li>
                  <li>
                    <FiMessageCircle />
                    {props.event.comments} Comments
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
                <div className="inner">
                  <p>{props.event.text[0]}</p>
                  <div className="thumbnail">
                    <img
                      src={`/assets/images/blog/bl-big-${props.event.images[1]}.jpg`}
                      alt="Blog Images"
                    />
                  </div>
                  <p className="mt--40">{props.event.text[1]}</p>
                  <p>{props.event.text[2]}</p>
                  <blockquote className="rn-blog-quote">
                    {props.event.text[3]}
                  </blockquote>
                  <p>{props.event.text[4]}</p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src={`/assets/images/blog/bl-big-${props.event.images[1]}.jpg`}
                        alt="BLog Images"
                      />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </span>
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo .
                      </p>
                      <h4 className="title">Ordered & Unordered Lists.</h4>
                      <ul className="list-style">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </ul>
                      <h4 className="title">Ordered & Unordered Lists.</h4>
                      <ul className="list-style">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt--25 mt_sm--5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                  <div className="video-wrapper position-relative mb--40">
                    <div className="thumbnail">
                      <img
                        src={`/assets/images/blog/bl-big-${props.event.images[2]}.jpg`}
                        alt="Blog Images"
                      />
                    </div>
                  </div>
                  <p className="mb--0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

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
