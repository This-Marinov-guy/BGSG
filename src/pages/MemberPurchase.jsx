import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import { useDispatch } from "react-redux";
import { removeModal } from "../redux/modal";
import Loader from "../elements/ui/Loader";

const MemberPurchase = () => {
  const [currentUser, setCurrentUser] = useState();
  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const userId = useParams().userId;

  const closeHandler = () => {
    dispatch(removeModal());
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

  const canvasRef = useRef(null);

  //doesnt work 
  useEffect(() => {
    const canvas = canvasRef.current;
    const layout = canvas.getContext("2d");
    let txt = "hello";
    let img = new Image();
    img.src = "/assets/images/tickets/ticket.png";
    img.onload = () => {
      // image
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      layout.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
      layout.save();

      // text
      layout.rotate(4.7);
      layout.font = "bold 70px Mozer";
      layout.fillStyle = "#faf9f6";
      layout.strokeText(txt, -550, 1550);
      layout.fillText(txt, -550, 1550);
      layout.restore();
    };
  }, []);

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
  ) : (
    <Loader />
  );
};

export default MemberPurchase;
