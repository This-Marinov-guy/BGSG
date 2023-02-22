import React, { Component, Fragment } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";

import Header from "../component/header/Header";
import About from "../component/HomeLayout/homeOne/About";

import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";

const image1 = "/assets/images/bg/paralax/city.jpg";
const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Bulgarian Society Groningen",
    description: "",
    buttonText: "Become a Member",
    buttonLink: '',
  },
];

const list = [
  {
    image: "image-1",
    category: "Bulgarian Dinner",
    title:
      "Try our traditional cuisine",
  },
  {
    image: "image-2",
    category: "Trifon Zarezan",
    title:
      "No valantine - wine is always there for us ",
  },
  {
    image: "image-3",
    category: "Freedom Fest",
    title: "Celebration of the national day of Bulgaria",
  },
];

const PostList = [
  {
    images: "01",
    category: "Development",
    title: "Barista Courses",
  },
  {
    images: "02",
    category: "Development",
    title: "Barista Courses",
  },
];
class CreativeAgency extends Component {
  render() {
    return (
      <Fragment>
        <Helmet pageTitle="Home" />
        <Header logo="light" />
        {/* Start Slider Area   */}
        <div className="slider-activation slider-creative-agency">
          <Parallax bgImage={image1} strength={100}>
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title theme-gradient">
                            <span>Bulgarian </span>
                            <span style={{ color: "#28a745" }}>Society </span>
                            <span style={{ color: "#dc3545" }}>Groningen </span>
                          </h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              style={{ fontSize: "24px" }}
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Parallax>
        </div>
        {/* End Slider Area   */}
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
        {/* Start About Area */}
        <div className="about-area ptb--120">
          <About />
        </div>
        {/* End About Area */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pt--140 p pb--110 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">What we have achieved</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area pt--120 pb--140 bg_color--5">
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">Past Events</h2>
                    <p>
                      Let us introduce you to our events that brought success
                      beyond our expectations
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <Slider {...slickDot}>
                      {list.map((value, index) => (
                        <div className="portfolio" key={index}>
                          <div className="thumbnail-inner">
                            <div className={`thumbnail ${value.image}`}></div>
                            <div
                              className={`bg-blr-image ${value.image}`}
                            ></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.category}</p>
                              <h4>
                                <a href="/portfolio-details">{value.title}</a>
                              </h4>
                              <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">
                                  Tell me more
                                </a>
                              </div>
                            </div>
                          </div>
                          <Link
                            className="link-overlay"
                            to="/portfolio-details"
                          ></Link>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Team Area  */}
        <div className="rn-team-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                  <h2 className="title">Meet the Board</h2>
                  <p>
                    We were founded in 2022 by our current president Lazar as an
                    NPO with 7 members each having a key role in the company
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--1 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        <div className="rn-blog-area pt--120 pb--140 bg_color--5">
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title text-left">
                    <h2>Expect soon</h2>
                    <p>More information about incoming - Better stay tuned!</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <Slider {...slickDot}>
                      <div className="blog blog-style--1">
                        <div className="thumbnail">
                          <a href="/blog-details">
                            <img
                              src={`/assets/images/blog/blog-${PostList[0].images}.jpg`}
                              alt="Blog Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="/blog-details">{PostList[0].title}</a>
                          </h4>
                          <div className="blog-btn">
                            <a className="rn-btn text-white" href="/blog-details">Read More</a>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default CreativeAgency;
