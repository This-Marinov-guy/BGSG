// React and Redux Required
import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/user";
import { useDispatch } from "react-redux";
import { selectError, selectErrorMsg } from "./redux/error";

// Blocks Layout
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./util/serviceWorker";
import { prefetch } from "./util/prefetch";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";
import Loader from "./elements/ui/Loader";

// Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/information/About"));
const Contact = lazy(() => import("./pages/information/Contact"));
const Policy = lazy(() => import("./pages/information/Policy"));
const Error404 = lazy(() => import("./pages/Error404"));
const Board = lazy(() => import("./pages/information/Board"));
const Committees = lazy(() => import("./pages/information/Committees"));
const LogIn = lazy(() => import("./pages/authentication/LogIn"));
const SignUp = lazy(() => import("./pages/authentication/SignUp"));
const User = lazy(() => import("./pages/authentication/User"));
const Events = lazy(() => import("./pages/information/Events"));
const FutureEvents = lazy(() =>
  import("./pages/information/FutureEvents").then((module) => ({
    default: module.FutureEvents,
  }))
);
const PastEvents = lazy(() =>
  import("./pages/information/PastEvents").then((module) => ({
    default: module.PastEvents,
  }))
);
const NonSocietyEvent = lazy(() => import("./elements/NonSocietyEvent"));
const EventDetails = lazy(() => import("./elements/EventDetails"));
const EventReflection = lazy(() => import("./elements/EventReflection"));
const MemberPurchase = lazy(() => import("./pages/MemberPurchase"));
const NonMemberPurchase = lazy(() => import("./pages/NonMemberPurchase"));
const Error = lazy(() => import("./elements/ui/Error"));
const Success = lazy(() => import("./pages/redirects/Success"));
const Fail = lazy(() => import("./pages/redirects/Fail"));

const openSocietyEvents = [
  {
    title: "Freedom Fest",
    description: "National day of Bulgaria",
    bgImage: "4",
    when: "3.3.2023, 20:00",
    where: "Business Hall",
    entry: 8,
    memberEntry: 5,
    price_id: "",
    memberPrice_id: "",
    text: [
      "Wild party",
      "We will provide drinks and snacks for our socity. Music and great spirit will crowd the dance floor as we promisethis will be an unforgetable experience that will be talked about for weeks after! Do not waste time and bookyour spot",
    ],
    images: ["portfolio-big-01.jpg"],
  },
];

const openNonSocietyEvents = [
  {
    title: "Barista Course",
    description: "Master the profession of a barista",
    bgImage: "4",
    when: "TBD",
    where: "TBD",
    entry: 30,
    memberEntry: 5,
    text: [
      "Wild party",
      "We will provide drinks and snacks for our socity. Music and great spirit will crowd the dance floor as we promisethis will be an unforgetable experience that will be talked about for weeks after! Do not waste time and bookyour spot",
    ],
    images: ["portfolio-big-01.jpg"],
  },
];

const Root = () => {
  //prefetch routes

  prefetch("/");
  prefetch("/about");
  prefetch("/contact");
  prefetch("/login");
  prefetch("/signup");
  prefetch("/board-members");
  prefetch("/committees");
  prefetch("/events");
  prefetch("/purchase-ticket");

  const [notification, setNotification] = useState();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const error = useSelector(selectError);
  const errorMessage = useSelector(selectErrorMsg);

  //auto logout
  useEffect(() => {
    let logoutTimer;
    if (user.token && user.expirationDate) {
      let remainingTime =
        new Date(user.expirationDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(handler, remainingTime);
      function handler() {
        dispatch(logout());
      }
    } else {
      clearTimeout(logoutTimer);
    }
  }, [user.token, logout, user.expirationDate]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationDate) > new Date()
    ) {
      dispatch(
        login({
          userId: storedData.userId,
          token: storedData.token,
          expirationDate: new Date(
            new Date().getTime() + 36000000
          ).toISOString(),
        })
      );
    }
  }, [dispatch]);

  return (
    <BrowserRouter basename={"/"}>
      <PageScrollTop>
        <Suspense fallback={null}>
          {notification}
          {error && <Error errorMessage={errorMessage} />}
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Element Layout */}
            <Route exact path={`/contact`} component={Contact} />
            <Route exact path={`/about`} component={About} />
            <Route exact path={`/rules-and-regulations`} component={Policy} />
            <Route exact path={`/board-members`} component={Board} />
            <Route exact path={`/committees`} component={Committees} />
            <Route exact path={`/events`} component={Events} />
            <Route exact path={`/future-events`} component={FutureEvents} />
            <Route exact path={`/past-events`} component={PastEvents} />

            <Route path={`/event-details/:eventId`} component={EventDetails} />
            <Route
              path={`/event-reflection/:eventId`}
              component={EventReflection}
            />

            {/* Redirect pages */}

            <Route exact path={`/success`} component={Success} />
            <Route exact path={`/fail`} component={Fail} />

            {/* Auth pages */}
            {user.token ? (
              <Switch>
                <Route exact path={`/user/:userId`} component={User} />
                <Route
                  exact
                  path={"/purchase-ticket/:userId"}
                  component={MemberPurchase}
                />
                <Route exact path={"/other-event-details/:eventId"}>
                  <NonSocietyEvent setNotification={setNotification} />
                </Route>
                <Route path="*" component={Error404} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path={`/login`}>
                  <LogIn setNotification={setNotification} />
                </Route>
                <Route exact path={`/signup`} component={SignUp} />
                <Route
                  exact
                  path={"/purchase-ticket"}
                  component={NonMemberPurchase}
                />
                <Route exact path={"/other-event-details/:eventId"}>
                  <NonSocietyEvent setNotification={setNotification} />
                </Route>
                <Route path="*" component={Error404} />
              </Switch>
            )}
          </Switch>
        </Suspense>
      </PageScrollTop>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);

serviceWorker.unregister();
