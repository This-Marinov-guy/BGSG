import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import { useSelector, useDispatch } from "react-redux";
import { removeModal, selectModal, showModal } from "../../redux/modal";
import Loader from "../../elements/ui/Loader";
import ImageInput from "../../elements/ui/ImageInput";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCircle, FiCheckCircle, FiEdit, FiChevronUp, FiX } from "react-icons/fi";
import FooterTwo from "../../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";
import ModalWindow from "../../elements/ui/ModalWindow";
import Locked from "../../elements/ui/Locked";
import PageLoading from '../../elements/ui/PageLoading'
import { LazyLoadImage } from "react-lazy-load-image-component";
import WindowShift from "../../elements/ui/WindowShift";
import ImageFb from "../../elements/ui/ImageFb";
import Greeting from "../../elements/Greeting";

const schema = yup.object().shape({
  image: yup.string(),
  name: yup.string().required(),
  surname: yup.string().required(),
  phone: yup.string().min(8).required(),
  email: yup.string().email("Please enter a valid email").required(),
  university: yup.string().required(),
  otherUniversityName: yup.string().when("university", {
    is: "other",
    then: () => yup.string().required("Please state which university"),
    otherwise: () => yup.string(),
  }),
  course: yup.string().when("university", {
    is: true,
    then: () => yup.string().required("Your course is a required filed"),
    otherwise: () => yup.string(),
  }),
  studentNumber: yup.string().when("university", {
    is: true,
    then: () =>
      yup.string().required("Your student number is a required filed"),
    otherwise: () => yup.string(),
  }),
});

const User = () => {
  const [currentUser, setCurrentUser] = useState();
  const [expand, setExpand] = useState(false);

  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const modal = useSelector(selectModal);

  const userId = useParams().userId;

  const closeHandler = () => {
    dispatch(removeModal());
  };

  const expandHandler = (elementId) => {
    const ticketImage = document.getElementById(elementId);
    const className = "expand_ticket_img";
    if (!ticketImage.classList.contains(className)) {
      ticketImage.classList.add(className);
      setExpand(true);
    } else {
      ticketImage.classList.remove(className);
      setExpand(false);
    }
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

  return currentUser ? (
    <React.Fragment>
      <PageHelmet pageTitle="Profile" />
      <HeaderTwo
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {currentUser.status !== "active" && (
        <Locked case="locked" show={currentUser.status} />
      )}
      {modal && (
        <ModalWindow show={modal}>
          <Formik
            className="inner"
            validationSchema={schema}
            onSubmit={async (values) => {
              const formData = new FormData();
              if (values.image) {
                formData.append(
                  "image",
                  values.image,
                  currentUser.name + currentUser.surname + currentUser.birth
                );
              } else {
                formData.append("image", null);
              }
              formData.append("name", values.name);
              formData.append("surname", values.surname);
              formData.append("phone", values.phone);
              formData.append("email", values.email);
              formData.append("university", values.university);
              formData.append(
                "otherUniversityName",
                values.otherUniversityName
              );
              formData.append("course", values.course);
              formData.append("studentNumber", values.studentNumber);
              formData.append(
                "notificationTypeTerms",
                values.notificationTypeTerms
              );
              if (currentUser.email !== values.email) {
                try {
                  const responseData = await sendRequest(
                    "user/check-email",
                    "POST",
                    JSON.stringify({
                      email: values.email,
                    }),
                    {
                      "Content-Type": "application/json",
                    }
                  );
                } catch (err) {
                  return;
                }
              }
              try {
                const responseData = await sendRequest(
                  `user/edit-info/${userId}`,
                  "PATCH",
                  formData
                );
                window.location.reload();
              } catch (err) { }
            }}
            initialValues={{
              image: "",
              name: currentUser.name,
              surname: currentUser.surname,
              phone: currentUser.phone,
              email: currentUser.email,
              university: currentUser.university,
              otherUniversityName: currentUser.otherUniversityName,
              course: currentUser.course,
              studentNumber: currentUser.studentNumber,
              policyTerms: false,
              dataTerms: false,
              notificationTerms: false,
              notificationTypeTerms: currentUser.notificationTypeTerms,
              payTerms: false,
            }}
          >
            {({ values, setFieldValue }) => (
              <Form
                encType="multipart/form-data"
                id="form"
                style={{ padding: "50px" }}
              >
                <div className="hor_section">
                  <h3>Fill your details and register</h3>
                  <FiX className="x_icon" onClick={closeHandler} />
                </div>
                <div className="row mb--40 mt--40">
                  <div className="col-lg-12 col-md-12 col-12">
                    <ImageInput
                      onChange={(event) => {
                        setFieldValue("image", event.target.files[0]);
                      }}
                      initialImage={currentUser.image}
                      errorRequired={
                        <ErrorMessage
                          className="error"
                          name="image"
                          component="div"
                        />
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field type="text" placeholder="Name" name="name" />
                      <ErrorMessage
                        className="error"
                        name="name"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field
                        type="text"
                        placeholder="Surname"
                        name="surname"
                      ></Field>
                      <ErrorMessage
                        className="error"
                        name="surname"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field
                        type="tel"
                        placeholder="WhatsApp Phone "
                        name="phone"
                      ></Field>
                      <p className="information">
                        Please type your number with + and country code
                      </p>
                      <ErrorMessage
                        className="error"
                        name="phone"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field type="email" placeholder="Email" name="email" />
                      <ErrorMessage
                        className="error"
                        name="email"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <Field as="select" name="university">
                      <option value="" disabled>
                        Select your univerisity
                      </option>
                      <option value="RUG">RUG</option>
                      <option value="Hanze">Hanze</option>
                      <option value="other">Other univerisity</option>
                      <option value="working">Working</option>
                    </Field>
                    <ErrorMessage
                      className="error"
                      name="university"
                      component="div"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    {values.university === "other" && (
                      <div className="rnform-group">
                        <Field
                          type="text"
                          placeholder="State the university"
                          name="otherUniversityName"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="otherUniversityName"
                          component="div"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {values.university !== "working" && (
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <Field
                          type="text"
                          placeholder="Study Program"
                          name="course"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="course"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <Field
                          type="text"
                          placeholder="Student Number"
                          name="studentNumber"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="studentNumber"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mt--40">
                    <Field
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                      name="notificationTerms"
                    ></Field>
                    <p className="information">
                      I consent to being notified by BGSG about events and
                      discounts from us and our sponsors
                    </p>
                  </div>
                  <Field as="select" name="notificationTypeTerms">
                    <option value="" disabled>
                      Contact By
                    </option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Email & WhatsApp">Both</option>
                  </Field>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="rn-button-style--2 btn-solid mt--80"
                >
                  {loading ? <Loader /> : <span>Update information</span>}
                </button>
              </Form>
            )}
          </Formik>
        </ModalWindow>
      )}
      {/* Start Info Area */}
      <div className="service-area ptb--120 bg_color--1 mt--120">
        <div className="container">
          <div className="row service-one-wrapper center_div">
            <div className="col-lg-6 col-md-12 col-12 ">
              <div className="service service__style--2">
                <div className="content center_div">
                  <LazyLoadImage src={currentUser.image} alt="profile" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="service service__style--2 team_member_border-5">
                <div className="content">
                  <h2>Hello again, {currentUser.name}!</h2>
                  <div className="hor_section mb--40">
                    <p className="mt--20">Your information</p>
                    <FiEdit
                      className="edit_btn"
                      onClick={() => {
                        dispatch(showModal());
                      }}
                    />
                  </div>
                  <div className="pricing-body">
                    <ul
                      style={{ textAlign: "start" }}
                      className="list-style--1"
                    >
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Full Name:{" "}
                        {currentUser.name + " " + currentUser.surname}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Date of Birth:{" "}
                        {currentUser.birth}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Email:{" "}
                        {currentUser.email}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Phone:{" "}
                        {currentUser.phone}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> University:{" "}
                        {currentUser.university === "other"
                          ? currentUser.otherUniversityName
                          : currentUser.university}
                      </li>

                      <li style={{ fontWeight: "bold" }}>
                        <FiCircle style={{ fontSize: "14px" }} /> Membership
                        Expires: {currentUser.expireDate}
                      </li>
                      <li>
                        <FiCheckCircle style={{ fontSize: "14px" }} /><a style={{ color: "#017363" }} href='https://chat.whatsapp.com/HE2IVMvTTbs88NXWSE3Eqn' target='_blank'>Click here to join the Member Chat</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Info Area */}
      {/* Start User Collection */}
      <WindowShift
        className="mt--80 mb--80"
        main="News"
        secondary="Ticket Collection"
        mainContent={
          <Fragment>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb--30 mb_sm--0">
                    <h2 className="title">News</h2>
                    <ul>
                      <Greeting />

                      <li >
                        <p>
                          Our first website event! <a href='/event-details/Board%20Game%20Night'>Check it out and enjoy the special member price!</a>
                        </p>
                      </li>
                      <li className="mt--40">
                        <p>
                          Open submissions for Active members will be notified
                          here! Check you profile or expect news from us!
                        </p>
                        {/* <button
                    className="rn-button-style--2 btn-solid mt--20"
                    disabled
                  >
                    Become an Active Member
                  </button> */}
                      </li>
                      <li className="mt--40">
                        <p>
                          We will soon post information for our 2nd member event.
                          Stay tuned!
                        </p>
                      </li>
                      <li className="mt--40">
                        <p>Exclusive Articles</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Article  Details */}
            <div
              className="rn-blog-details article pt--110 pb--70 pr--10 pl--10 bg_color--1"
            >
              <div className="inner-wrapper">
                <div className="inner">
                  <h2 style={{ textAlign: "start" }}>
                    The entrepreneurship series II: Toni Enchev Small steps
                    towards big goals
                  </h2>
                  <p style={{ textAlign: "end", fontSize: '26px' }} className="mb--10">
                    Small steps towards big goals
                  </p>
                  <p className="author mb--20"> Written by Gergana Popova & Jordanka Daskalova      </p>
                  <ImageFb
                    className="mt--20 mb--40"
                    src="/assets/images/profile/toni/1.webp"
                    fallback="/assets/images/profile/toni/1.jpeg"
                    alt="Article Images"
                  />
                  <p className="mb--40">
                    On Saturday, 22nd of April, our second lecture of the Entrepreneurship Series for Bulgarian Society Groningen was held by Toni Enchev. He
                    successfully converted his abandoned family villa into a
                    place for unforgettable parties, doing it from scratch with
                    the help of family and friends …not only once but TWICE!
                  </p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <ImageFb
                        className="w-100"
                        src="/assets/images/profile/toni/2.webp"
                        fallback="/assets/images/profile/toni/2.jpeg"
                        alt="BLog Images"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Toni is a Bachelor student in Journalism from University
                        of Sofia in Bulgaria. His education is not in any way
                        related to business or entrepreneurship, yet he was able
                        to start a business, showing that this can be achieved
                        by anyone who has enough passion, patience and support.
                        Toni claims that this can be done by anyone with no
                        business knowledge and all that it is needed are “small
                        and gradual steps”.
                      </p>
                    </div>
                  </div>
                  <h2 className="mt--80">
                    TONI'S VILLA - The party never ends!
                  </h2>
                  <p>
                    {" "}
                    Toni"s main venture is “Toni's Villa”. Toni recalls from his
                    childhood that the villa was used initially as a family
                    vacation home for celebrating birthdays or other special
                    occasions. After a while the villa got abandoned.
                    Unfortunately, the lake that the villa was built next to got
                    drained by the government, and the place lost its charm.
                  </p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap mt--80 mb--40">
                    <div className="thumbnail">
                      <ImageFb
                        className="w-100"
                        src="/assets/images/profile/toni/3.webp"
                        fallback="/assets/images/profile/toni/3.jpeg"
                        alt="BLog Images"
                      />
                    </div>
                    <div className="content">
                      <p>
                        For 4 years the villa and its surroundings were
                        gradually declining until they became completely
                        forgotten. This was until Toni decided to have a special
                        celebration for his 18th birthday and bring the villa
                        back to life.
                      </p>
                      <p>
                        With the help of his closest friends and family Toni
                        revived the place and threw the biggest party the villa
                        has seen in years!
                      </p>
                    </div>
                  </div>
                  <p className="mt--40">
                    Since Veni, a friend of Toni, had a great time at the
                    birthday party, he decided he wanted to have his own
                    birthday party at the villa too! At first Toni was unwilling
                    as he did not want to cause any damage to his parents' newly
                    renovated villa but after some convincing, Toni spoke with
                    his parents and he finally agreed. Little did Toni know that
                    this was the beginning of Toni's Villa. Veni was not the
                    only friend of Toni that wanted to throw a party at the
                    villa. Since there was a high demand for the place Toni
                    understood that things were getting more serious. Thе whole
                    venture began to look like an actual business.
                  </p>
                  <p>
                    Every company needs a logo, so Toni needed one as well! With
                    the help of his friends a logo was designed and that was the
                    first step of making Toni's Villa official. After that he
                    created an instagram page (@tonis_villa), which quickly
                    gained popularity. People outside of his friend circle began
                    to show interest in the villa as well, and soon he had an
                    event there every week.
                  </p>
                  <div className="images-container mb--40 mt--40">
                    <img
                      className="mb--20"
                      src="/assets/images/profile/toni/5.jpeg"
                      alt="BLog Images"
                    />
                    <img
                      src="/assets/images/profile/toni/6.jpeg"
                      alt="BLog Images"
                    />
                  </div>
                  <p>
                    In every business there is a moment of decline or
                    stagnation. This is exactly what Toni experienced as the
                    demand for the villa decreased. Toni was insightful enough
                    to approach the situation with some original ideas. Toni
                    decided to level up. Toni’s Villa would become a place where
                    theme party events would be hosted by Toni himself. In order
                    to do so he had to renovate and modernise the house over the
                    summer vacation by using his own money. He bought lights, a
                    sound system and even added graffiti made by a local artist
                    who happens to be his friend. To make it even more
                    professional another close friend of Toni took the role of a
                    house DJ. Thus the place was brought back to life.
                  </p>

                  <p className="mt--25 mt_sm--5">
                    For several months everything was going according to plan.
                  </p>
                  <div className="images-container">
                    <img
                      className="mb--20"
                      src="/assets/images/profile/toni/7.jpeg"
                      alt="BLog Images"
                    />
                    <img
                      src="/assets/images/profile/toni/8.jpeg"
                      alt="BLog Images"
                    />
                  </div>
                  <h2 className="mt--80 mb--20">
                    AND THEN EVERYTHING FELL APART
                  </h2>
                  <p className="mb--40">
                    On 14th of February while Toni was in class, he got a call
                    from his mother. She brought him the bad news that the villa
                    was robbed. His mother found the house completely empty. At
                    first he was in shock and denial. He could not believe her.
                    Arriving at the villa, he saw his mother sitting there,
                    crying. The villa was indeed empty - the sound system, the
                    furniture, the lights, everything Toni was working for for
                    the last 3 years was gone.
                  </p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <ImageFb
                        src="/assets/images/profile/toni/9.webp"
                        fallback="/assets/images/profile/toni/9.jpeg"
                        alt="BLog Images"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Toni was faced with a dilemma. Should he give up? Is
                        there even another option? Can he start from scratch
                        again?
                      </p>
                    </div>
                  </div>
                  <h2 className="mt--80 mb--20">THE COMEBACK</h2>
                  <p>
                    {" "}
                    Toni decided not to give up. He used the crysis he
                    experienced to propel the villa to new heights. With the
                    help of a friend Toni shot a video in which he told the
                    story of his robbery and the disappointment he experienced.
                    In the video he showed the 3 week process of fixing the
                    villa again from scratch for the second time! After the
                    release of the video he created the biggest party the villa
                    has ever seen. Toni’s Villa became more successful than
                    ever. After Toni’s bounce back the motto of the villa was
                    created - “The party never ends”
                  </p>
                  <div className="images-container">
                    <img
                      className="mb--20 mr--5"
                      src="/assets/images/profile/toni/10.jpeg"
                      alt="BLog Images"
                    />
                    <img
                      className="ml--5"
                      src="/assets/images/profile/toni/11.jpeg"
                      alt="BLog Images"
                    />
                  </div>
                  <p>
                    <a
                      href="https://www.instagram.com/tv/CbIkz_QFrQm/"
                      target="_blank"
                    >
                      Link to the video of robbery
                    </a>
                  </p>
                  <h2 className="mt--60">OTHER PROJECTS </h2>
                  <p className="center_text">
                    {" "}
                    Other businesses and projects Toni Enchev works on include:
                  </p>
                  <ul>
                    <li>
                      An art project called “It depends on us”, where abandoned
                      places get renovated with paintings with the faces of
                      important and influential Bulgarians from the past
                    </li>
                    <li>
                      Street interviews, which can be found on his Youtube
                      Channel
                    </li>
                    <li>
                      A podcast, called “Near the fireplace”, which can be found
                      in his YouTube channel{" "}
                      <a
                        href="https://www.youtube.com/@tonienchev/"
                        target="_blank"
                      >
                        (Check it here)
                      </a>
                    </li>
                    <li>
                      A clothing brand, namely “Yunak Brand”, promoted on
                      Instagram{" "}
                      <a
                        href=" https://www.instagram.com/yunak.brand/"
                        target="_blank"
                      >
                        (Check it here)
                      </a>
                    </li>
                  </ul>
                  <h2 className="mt--80 mb--20">A TAKE HOME MESSAGE </h2>
                  <p>
                    Toni’s story showcases that anything you want can be
                    achieved with consistency, patience, and the help of your
                    closest friends. His achievements can be attributed to
                    countless hours of work. He spent a lot of summers and
                    holidays working while others were resting, spending their
                    holidays abroad or simply partying at Sunny Beach. Toni was
                    brave enough to trust that his friends and family always had
                    his back and this trust paid off by creating a strong team
                    that made all of his ventures possible.
                  </p>
                  <p>
                    {" "}
                    You will always be faced with road blocks and different
                    dilemmas. For instance, whether you should give up or keep
                    going. The core take home message is you should know
                    yourself. You should know whether you want something or not.
                    You should know yourself well enough so you don’t fall in
                    the trap of lying to yourself that something is not for you
                    just because it is too difficult. On the other hand you
                    should also know yourself well enough to know when to stop,
                    to remember the reasons that made you start in the first
                    place and see if they are still valid. In other words you
                    should introspect and find your true passions.
                  </p>
                  <p>
                    {" "}
                    In summary, Tony believes that obstacles will inevitably
                    arise as you work towards your goals. However, it's up to
                    you to decide whether to give up or to persist and overcome
                    them.
                  </p>
                </div>
              </div>
            </div>
            {/* End Article  Details */}
          </Fragment>
        }
        secondaryContent={
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb--30 mb_sm--0">
                  <h2 className="title mb--40">Ticket Collection</h2>
                  {currentUser.tickets.length > 0 ? (
                    <div className="row">
                      {currentUser.tickets.map((ticket, i) => (
                        <div className="col-lg-4 col-md-6 col-12" key={i}>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                {expand ? "Click to Shrink" : "Click to Expand"}
                              </Tooltip>
                            }
                          >
                            <img
                              id={`ticket${i}`}
                              className="mb--40"
                              src={ticket.image}
                              alt="ticket"
                              onClick={(event) => {
                                expandHandler(event.target.id);
                              }}
                            />
                          </OverlayTrigger>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No tickets purchased</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        }
      />
      {/* End User Collection */}

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
    </React.Fragment>
  ) : (
    <PageLoading />
  );
};

export default User;
