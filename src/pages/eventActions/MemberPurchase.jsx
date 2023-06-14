import React, { Fragment, useEffect, useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/Header";
import { useHistory, useParams } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "../../elements/ui/Loader";
import Locked from "../../elements/ui/Locked";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../../component/footer/Footer";
import ImageFb from "../../elements/ui/ImageFb";
import { useObjectGrabUrl } from "../../hooks/object-hook";
import { OPEN_SOCIETY_EVENTS } from "../../util/EVENTS";
import PageLoading from "../../elements/ui/PageLoading";
import FormExtras from "../../elements/ui/FormExtras";

const schema = yup.object().shape({
  menuType: yup.string().required("Please select a menu") ,
  drink: yup.string().required('Please select your drink'),
});

const MemberPurchase = () => {
  const [currentUser, setCurrentUser] = useState();
  const { loading, sendRequest } = useHttpClient();

  const userId = useParams().userId;

  const history = useHistory()

  const target = useObjectGrabUrl(OPEN_SOCIETY_EVENTS);

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

  return currentUser ? (
    <Fragment>
      <PageHelmet pageTitle="Buy Ticket" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
        dark
      />
      {currentUser.status !== "active" && <Locked case='locked' show={currentUser.status} />}
      <div className="container mt--200 mb--120">
        <h2 className="center_text mb--80">Purchase a Ticket</h2>

        <div className="row slide-down center_div">
          <ImageFb src={`${target.images[0]}.webp`} fallback={`${target.images[0]}.jpg`} alt="Event" className="title_img" />
        </div>
        <div
          style={{ width: "80%", margin: "auto" }}
          className="row team_member_border-3 mt--80 purchase_panel"
        >
          <Formik
            validationSchema={schema}
            onSubmit={async (values) => {
              try {
                // Create a canvas element, add the image and text, covert to blob
                //for 1500 x 485 images
                var canvas = document.createElement("canvas");
                var layout = canvas.getContext("2d");
                let ticket = new Image();
                ticket.src = target.ticket_img;
                //image
                canvas.width = ticket.naturalWidth;
                canvas.height = ticket.naturalHeight;
                layout.drawImage(
                  ticket,
                  0,
                  0,
                  ticket.naturalWidth,
                  ticket.naturalHeight
                );
                // text
                let textName = currentUser.name;
                layout.rotate(4.71);
                layout.font = "52px Archive";
                layout.fillStyle = "#faf9f6";
                layout.textAlign = "center";
                layout.strokeText(textName, -255, 1170);
                layout.fillText(textName, -255, 1170);

                layout.font = "52px Archive";
                layout.fillStyle = "#faf9f6";
                let textSurname = currentUser.surname;
                layout.textAlign = "center";
                layout.strokeText(textSurname, -255, 1230);
                layout.fillText(textSurname, -255, 1230);
                // blob
                const dataBlob = await new Promise((resolve) =>
                  canvas.toBlob((blob) => resolve(blob), "image/webp")
                );
                // formData
                const formData = new FormData();
                formData.append(
                  "image",
                  dataBlob,
                  target.title + "_" + currentUser.name + currentUser.surname + "_MEMBER"
                );
                if (target.activeMemberPrice_id && (currentUser.expireDate === "Board Member" || currentUser.expireDate === "Committee Member" || currentUser.expireDate === "VIP" || currentUser.expireDate === "VIP Member")) {
                  formData.append("itemId", target.activeMemberPrice_id);
                } else {
                  formData.append("itemId", target.memberPrice_id);
                }
                formData.append("origin_url", window.location.origin);
                formData.append("method", "buy_member_ticket");
                formData.append("eventName", target.title);
                formData.append("eventDate", target.date);
                formData.append("userId", userId);
                target.extraInputs && formData.append('preferences', JSON.stringify({ menuType: values.menuType, drink: values.drink }))
                //free pass checklist
                if (target.freePass.includes(currentUser.email)) {
                  const responseData = await sendRequest(
                    "event/purchase-ticket/member",
                    "POST",
                    formData
                  );
                  history.push('/success');
                }
                else {
                  const responseData = await sendRequest(
                    "payment/checkout/member",
                    "POST",
                    formData
                  );
                  if (responseData.url) {
                    window.location.assign(responseData.url);
                  }
                }
              } catch (err) { }
            }}
            initialValues={{
              menuType: target.extraInputs ? "" : 'none',
              drink: target.extraInputs ? "" : 'none',
            }}>
            {() => (
              <Form id='form' encType="multipart/form-data"
              >
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="event_details">
                    <h2 className="mt--40">Event Details</h2>
                    <p>Name: {target.title}</p>
                    <p>
                      Date:{" "}
                      {target.correctedDate
                        ? target.correctedDate + " Updated!"
                        : target.date}
                    </p>
                    <p>
                      Time:{" "}
                      {target.correctedTime
                        ? target.correctedTime + " Updated!"
                        : target.time}
                    </p>
                    <p>Address: {target.where}</p>
                    <p>Price: {target.memberEntry} euro (discounted)</p>
                  </div>
                </div>
                <FormExtras extraInputs={target.extraInputs}/>
                <button
                  disabled={loading}
                  type="submit"
                  className="rn-button-style--2 btn-solid mt--80"
                >
                  {loading ? <Loader /> : <span>Proceed to paying</span>}
                </button>
                <p className="information mt--20">
                  The information for purchasing this ticket will be taken from your
                  account. Be sure it is accurate as it can be used as a proof of
                  your identity on the entry!
                </p>
                <p className="information mt--10">*Special discounted price for board and committee members may apply</p>
              </Form>
            )}
          </Formik>
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
    <PageLoading />
  );
};

export default MemberPurchase;
