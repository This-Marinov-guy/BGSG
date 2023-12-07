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
import { createCustomerTicket } from "../../util/ticket-creator";
import PageLoading from "../../elements/ui/PageLoading";
import FormExtras from "../../elements/ui/FormExtras";

const schema = yup.object().shape({
  menuType: yup.string().required("Please select a menu"),
  drink: yup.string().required('Please select your drink'),
});

const MemberPurchase = () => {
  const { loading, sendRequest } = useHttpClient();

  const [currentUser, setCurrentUser] = useState();
  const [loadingPage, setLoadingPage] = useState(true);
  const [remainingTickets, setRemainingTickets] = useState()
  const [eventClosed, setEventClosed] = useState(false)

  const userId = useParams().userId;

  const history = useHistory()

  const target = useObjectGrabUrl(OPEN_SOCIETY_EVENTS);

  function calculateTimeRemaining(timer) {
    const now = new Date().getTime();
    const targetTime = new Date(timer).getTime();
    const timeDifference = targetTime - now;
    return Math.max(0, timeDifference);
  }

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        if (!userId) {
          history.push('/404');
        }
        const responseData = await sendRequest(`user/${userId}`);
        setCurrentUser(responseData.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCurrentUser();
  }, [userId]);


  useEffect(() => {
    setLoadingPage(true);
    if (target.ticketLimit) {
      const checkRemainingTicketQuantity = async () => {
        try {
          const responseData = await sendRequest(`event/sold-ticket-count`, "POST", JSON.stringify({
            eventName: target.title,
          }),
            {
              "Content-Type": "application/json",
            });
          setRemainingTickets(target.ticketLimit - responseData.ticketsSold);
          if (remainingTickets <= 0) {
            setEventClosed(true)
          }
        } catch (err) {
          console.log(err);
        }
      };
      checkRemainingTicketQuantity();
    }
    if (target.ticketTimer) {
      const timeRemaining = calculateTimeRemaining(target.ticketTimer);
      if (timeRemaining <= 0) {
        setEventClosed(true)
      }
    }
    setLoadingPage(false)
  }, [target])

  if (loadingPage || !currentUser) {
    return <PageLoading />
  } else if (eventClosed) {
    return (
      <div className="container center_text mt--100">
        <ImageFb
          className="logo mb--40"
          src="/assets/images/logo/logo.webp"
          fallback="/assets/images/logo/logo.jpg"
          alt="Logo"
        />
        <h3 className="">Opps ... it is all SOLD OUT! Please check the event description for tickets on-the-door or contact us through our email! Hope we see you soon!</h3>
        <a href='/'
          className="rn-button-style--2 btn-solid mt--20"
        >
          Home
        </a>
      </div>)
  } else {
    return (
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
                  const ticket = await createCustomerTicket(target.ticket_img, currentUser.name, currentUser.surname);

                  // formData
                  const formData = new FormData();
                  formData.append(
                    "image",
                    ticket,
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
                  if (target.extraInputs) {
                    formData.append('preferences', JSON.stringify({ menuType: values.menuType, drink: values.drink }))
                  }
                  if (target.freePass.includes(currentUser.email) || target.freePass.includes(currentUser.name + ' ' + currentUser.surname)) {
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
                      <p>Price: {target.memberEntry ? `${target.memberEntry} euro (discounted)` : `${target.entry} (no MEMBER discount)`}</p>
                    </div>
                  </div>
                  {target.extraInputs && <FormExtras />}
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
    )
  }
};

export default MemberPurchase;
