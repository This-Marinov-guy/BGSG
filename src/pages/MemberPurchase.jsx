import React, { Fragment, useEffect, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import { useHistory, useParams } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import Loader from "../elements/ui/Loader";
import Locked from "../elements/ui/Locked";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";

const MemberPurchase = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const { loading, sendRequest } = useHttpClient();

  const history = useHistory();

  const userId = useParams().userId;

  const closeHandler = () => {
    props.setNotification(null);
  };

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
      formData.append("eventName", "freedom fest");
      formData.append("eventDate", "03.03.2023");
      formData.append("userId", userId);
      formData.append(
        "ticket",
        dataBlob,
        "freedom_fest_" + currentUser.name + currentUser.surname + "_MEMBER"
      );
      const responseData = await sendRequest(
        "event/purchase-ticket/member",
        "POST",
        formData
      );
      props.setNotification(
        <Alert className="error_panel" variant="success">
          <div className="action_btns">
            <h3>Thank you for buying a ticket for our event!</h3>
            <FiX className="mr--20" onClick={closeHandler} />
          </div>
          <p>
            Please check your email to access your ticket and be sure to have it
            on the entry! Find more information on the event section. See you
            there!
          </p>
        </Alert>
      );
      history.push("/");
      setTimeout(() => closeHandler(), 10000);
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
      <div className="container mt--200">
        <h2 className="center_text mb--80">Purchase a Ticket</h2>
      </div>
      <div
        style={{ margin: "auto", width: "80%" }}
        className="row slide-down center_div"
      >
        <img
          src="/assets/images/portfolio/portfolio-big-01.jpg"
          alt="Event"
          className="title_img"
        />
      </div>
      <div
        style={{ width: "80%" }}
        className="row purchase_panel team_member_border-3"
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
          {loading ? (
            <Loader />
          ) : (
            <button
              className="rn-button-style--2 btn-solid mt--80"
              onClick={submitHandler}
            >
              <span>Proceed to paying</span>
            </button>
          )}
          <p className="information mt--20">
            The information for purchasing this ticket will be taken from your
            account. Be sure it is accurate at it can be use as a prove of your
            identity on the entry!
          </p>
        </div>
      </div>
    </Fragment>
  ) : (
    <Loader />
  );
};

export default MemberPurchase;
