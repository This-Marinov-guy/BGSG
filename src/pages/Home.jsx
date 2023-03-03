import React, { Component, Fragment } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { slickDot } from "../page-demo/script";
import Slider from "react-slick";
import Header from "../component/header/Header";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";

const image1 = "/assets/images/bg/paralax/groningen.jpg";
const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Bulgarian Society Groningen",
    description: "",
    buttonText: "Become a Member",
    buttonLink: "",
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
class Home extends Component {
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

        {/* Start Blog Area */}
        <div className="rn-blog-area pt--120 pb--140 bg_color--5">
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title text-left">
                    <h2>What can you expect</h2>
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
                            <a
                              className="rn-btn text-white"
                              href="/blog-details"
                            >
                              Read More
                            </a>
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

export default Home;
