import React, { Fragment, useEffect, useRef } from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";

const MemberPurchase = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const layout = canvas.getContext("2d");
    let txt ='Vladislav Marinov'
    let img = new Image();
    img.src = "/assets/images/tickets/ticket.png";
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      layout.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

      layout.font = "bold 100px Mozer";
      layout.fillStyle = "rgb(255, 255, 255)";
      layout.fillText(txt, 0, 50);
    };
  });

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
      <div style={{ margin: "auto", width: "80%" }} className="row">
        <canvas ref={canvasRef} name="canvas" />
      </div>
      <div className="row purchase_panel team_member_border-3">
        <div style={{ width: "40%" }} className="col-lg-6 col-md-12 col-12">
          <div className="event_details">
            <h2 className="mt--40">Event Details</h2>
            <p>Name: Freedome Fest</p>
            <p>Date: 23.1.2021</p>
            <p>Time: 8:00</p>
            <p>Address: Groningen</p>
            <p>Price: 8 euro</p>
          </div>
        </div>
        <div style={{ width: "40%" }} className="col-lg-6 col-md-12 col-12">
          <div className="container">
            <a className="rn-button-style--2 btn-solid mt--80">
              <span>Proceed to paying</span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MemberPurchase;
