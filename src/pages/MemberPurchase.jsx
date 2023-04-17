import React, { Fragment, useEffect, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import Loader from "../elements/ui/Loader";
import Locked from "../elements/ui/Locked";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";

const MemberPurchase = () => {
  const [currentUser, setCurrentUser] = useState();
  const { loading, sendRequest } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const responseData = await sendRequest(`user/${userId}`);
        setCurrentUser(responseData.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCurrentUser();
  }, [sendRequest, userId]);

  const submitHandler = async () => {
    try {
      // Create a canvas element, add the image and text, covert to blob
      var canvas = document.createElement("canvas");
      var layout = canvas.getContext("2d");
      let ticket = new Image();
      ticket.src = "/assets/images/tickets/ticket.png";
      //image
      canvas.width = ticket.naturalWidth;
      canvas.height = ticket.naturalHeight;
      layout.drawImage(ticket, 0, 0, ticket.naturalWidth, ticket.naturalHeight);
      // text
      let textName = currentUser.name;
      layout.rotate(4.71);
      layout.font = "bold 70px Mozer";
      layout.fillStyle = "#faf9f6";
      layout.textAlign = "center";
      layout.strokeText(textName, -340, 1520);

      layout.font = "bold 70px Mozer";
      layout.fillStyle = "#faf9f6";
      let textSurname = currentUser.surname;
      layout.textAlign = "center";
      layout.strokeText(textSurname, -340, 1600);
      layout.fillText(textSurname, -340, 1600);
      // blob
      const dataBlob = await new Promise((resolve) =>
        canvas.toBlob((blob) => resolve(blob), "image/jpeg")
      );
      // formData
      const formData = new FormData();
      formData.append(
        "image",
        dataBlob,
        "freedom_fest_" + currentUser.name + currentUser.surname + "_MEMBER"
      );
      formData.append("itemId", "price_1MudzeIOw5UGbAo1K0l3xJ9y");
      formData.append("origin_url", window.location.origin);
      formData.append("method", "buy_member_ticket");
      formData.append("eventName", "freedom fest");
      formData.append("eventDate", "03.03.2023");
      formData.append("userId", userId);
      const responseData = await sendRequest(
        "payment/checkout",
        "POST",
        formData
      );
      if (responseData.url) {
        window.location.assign(responseData.url);
      }
    } catch (err) {}
  };

  return currentUser ? (
    <Fragment>
      <PageHelmet pageTitle="Buy Ticket" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
        dark
      />
      {currentUser.status !== "active" && <Locked show={currentUser.status} />}
      <div className="container mt--200 mb--120">
        <h2 className="center_text mb--80">Purchase a Ticket</h2>

        <div className="row slide-down center_div">
          <img
            src="/assets/images/portfolio/portfolio-big-01.jpg"
            alt="Event"
            className="title_img"
          />
        </div>
        <div
          style={{ width: "80%", margin: "auto" }}
          className="row team_member_border-3 mt--80 purchase_panel"
        >
          <div className="col-lg-6 col-md-12 col-12">
            <div className="event_details">
              <h2 className="mt--40">Event Details</h2>
              <p>Name: Freedom Fest</p>
              <p>Date: 23.1.2021</p>
              <p>Time: 8:00</p>
              <p>Address: Groningen</p>
              <p>Price: 5 euro (discounted)</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <button
              disabled={loading}
              onClick={submitHandler}
              className="rn-button-style--2 btn-solid mt--80"
            >
              {loading ? <Loader /> : <span>Proceed to paying</span>}
            </button>
            <p className="information mt--20">
              The information for purchasing this ticket will be taken from your
              account. Be sure it is accurate at it can be use as a prove of
              your identity on the entry!
            </p>
          </div>
        </div>
      </div>
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </Fragment>
  ) : (
    <Loader />
  );
};

export default MemberPurchase;
