import React, { Fragment, useEffect, useRef, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import { useHistory, useParams } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import { useDispatch } from "react-redux";
import { removeModal } from "../redux/modal";
import Loader from "../elements/ui/Loader";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";

const MemberPurchase = (props) => {
  const [currentUser, setCurrentUser] = useState("");
  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const history = useHistory();

  const canvasRef = useRef(null);

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

  const init = () => {
    const canvas = canvasRef.current;
    const layout = canvas.getContext("2d");
    let img = new Image();
    img.src = "/assets/images/tickets/ticket.png";

    img.onload = () => {
      // image
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      layout.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
      layout.save();

      // text
      let txt = currentUser.name + " " + currentUser.surname;
      layout.rotate(4.71);
      layout.font = "bold 70px Mozer";
      layout.fillStyle = "#faf9f6";
      layout.strokeText(txt, -570, 1550);
      layout.fillText(txt, -570, 1550);
      layout.restore();
    };
  };

  useEffect(() => {
    window.onload = init;
  }, [currentUser]);

  const submitHandler = async () => {
    try {
      const canvas = document.getElementById("canvas");
      const dataBlob = await new Promise((resolve) =>
        canvas.toBlob((blob) => resolve(blob), "image/png")
      );
      const formData = new FormData();
      formData.append("eventName", "freedom fest");
      formData.append("eventDate", "03.03.2023");
      formData.append("userId", userId);
      formData.append(
        "ticket",
        dataBlob,
        "freedom_fest_" + currentUser.name + currentUser.surname
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
      <div className="container mt--200">
        <h2 className="center_text mb--80">Purchase a Ticket</h2>
      </div>
      <div style={{ margin: "auto", width: "80%" }} className="row">
        <canvas id="canvas" ref={canvasRef} name="canvas" />
      </div>
      <div
        style={{ width: "80%" }}
        className="row purchase_panel team_member_border-3"
      >
        <div className="col-lg-6 col-md-12 col-12">
          <div className="event_details">
            <h2 className="mt--40">Event Details</h2>
            <p>Name: Freedome Fest</p>
            <p>Date: 23.1.2021</p>
            <p>Time: 8:00</p>
            <p>Address: Groningen</p>
            <p>Price: 5 euro (discounted)</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="container">
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
              account. Be sure it is accurate at it can be use as a prove of
              your identity on the entry!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Loader />
  );
};

export default MemberPurchase;
