import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user";
import Header from "../component/header/Header";
import AboutUs from "../component/HomeLayout/homeOne/AboutUs";
import FooterTwo from "../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import BrandTwo from "../elements/BrandTwo";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import {
  FutureEventsContent,
  FutureOtherEventsContent,
} from "./information/FutureEvents";
import ImageFb from "../elements/ui/ImageFb";

const Home = () => {
  const user = useSelector(selectUser);

  const SlideList = [
    {
      textPosition: "text-center",
      category: "",
      title: "Bulgarian Society of Groningen",
      description: "",
      buttonText: user.token ? "Go To Profile" : "Become a Member",
      style: user.token ? " rn-btn-reverse-green" : " btn-primary-color",
      buttonLink: user.token ? `/user/${user.userId}` : "/signup",
    },
  ];

  return (
    <Fragment>
      <Helmet pageTitle="Home" />
      <Header logo="light" />
      {/* Start Slider Area   */}
      <div className="slider-activation slider-creative-agency">
        <ImageFb
          src="/assets/images/bg/paralax/groningen.webp"
          fallback="/assets/images/bg/paralax/groningen.jpg"
          className="home_bg"
        />
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
                      <h1 className="title theme-gradient">{value.title}</h1>
                    ) : (
                      ""
                    )}
                    {value.description ? (
                      <p className="description">{value.description}</p>
                    ) : (
                      ""
                    )}
                    {value.buttonText && (
                      <div className="slide-btn">
                        <a
                          style={{ fontSize: "24px" }}
                          className={"rn-button-style--2" + value.style}
                          href={value.buttonLink}
                        >
                          {value.buttonText}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Slider Area   */}
      {/* Start Sponsor Area */}

      <BrandTwo />

      {/* End Sponsor Area */}

      {/* Start About Area  */}
      <AboutUs />
      {/* End About Area  */}

      {/* Start News Area */}
      <div className="container mt--80 mb--80">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="title">News</h2>
            <ul>
              {user.token ? <Fragment><p>Check the exclusive article from The Entrepreneurship Series II about Toni and his business story: </p><a style={{ fontSize: '20px' }} href={`/user/${user.userId}`}>Click here and scroll to News</a></Fragment> : <p>Stay tuned for more information</p>}
            </ul>
          </div>
        </div>
      </div>
      {/* End News Area */}

      {/* Start Upcoming Events Area */}
      <FutureEventsContent />
      <FutureOtherEventsContent />
      {/* End Upcoming Events Area */}

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
};

export default Home;
