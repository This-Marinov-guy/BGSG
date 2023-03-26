import React, { Fragment, useEffect, useRef } from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";

const MemberPurchase = () => {
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;

  //   const layout = canvas.getContext("2d");
  //   let img = new Image();
  //   img.src = "/assets/images/tickets/ticket.png";
  //   img.onload = () => {
  //     var hRatio = canvas.width / img.width;
  //     var vRatio = canvas.height / img.height;
  //     var ratio = Math.min(hRatio, vRatio);
  //     var centerShift_x = (canvas.width - img.width * ratio) / 2;
  //     var centerShift_y = (canvas.height - img.height * ratio) / 2;
  //     ctx.drawImage(
  //       img,
  //       0,
  //       0,
  //       img.width,
  //       img.height,
  //       centerShift_x,
  //       centerShift_y,
  //       img.width * ratio,
  //       img.height * ratio
  //     );
  //   };
  // });

  return (
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
      <div className="row purchase_panel">
        <div style={{ width: "40%" }} className="col-lg-4 col-md-12 col-12">
          <div className="event_details">
            <img
              src="/assets/images/tickets/ticket.png"
              alt="ticket"
              className="title_img expand_img"
            />
            <h2 className="mt--40">Event Details</h2>
            <p>Name: Freedome Fest</p>
            <p>Date: 23.1.2021</p>
            <p>Time: 8:00</p>
            <p>Address: Groningen</p>
            <p>Price: 8 euro</p>
          </div>
        </div>
        <div style={{ width: "20%" }} className="col-lg-4 col-md-12 col-12">
          <div className="line" />
        </div>
        <div style={{ width: "40%" }} className="col-lg-4 col-md-12 col-12">
          <div className="container">
            <a
              className="rn-button-style--2 btn-solid mt--80"
            >
              <span>Proceed to paying</span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MemberPurchase;
