// React and Redux Required
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/user";
import { useDispatch } from "react-redux";
import { selectError, selectErrorMsg } from "./redux/error";

// Blocks Layout
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Home layout
import Home from "./pages/Home";

// Element Layout
import About from "./pages/information/About";
import Contact from "./pages/information/Contact";
import Policy from "./pages/information/Policy";
import Error404 from "./pages/Error404";
import Board from "./pages/information/Board";
import Committees from "./pages/information/Committees";

import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import User from "./pages/authentication/User";
import Events from "./pages/information/Events";
import EventDetails from "./elements/EventDetails";
import EventReflection from "./elements/EventReflection";
import MemberPurchase from "./pages/MemberPurchase";
import NonMemberPurchase from "./pages/NonMemberPurchase";
import Error from "./elements/ui/Error";
import StripePayment from "./elements/ui/StripePayment";
import Success from "./pages/redirects/Success";
import Fail from "./pages/redirects/Fail";

const Root = () => {
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
        {notification}
        {error && <Error errorMessage={errorMessage} />}
        <Switch>
          <Route exact path="/">
            <Home setNotification={setNotification} />
          </Route>

          {/* Element Layout */}
          <Route exact path={`/contact`} component={Contact} />
          <Route exact path={`/about`} component={About} />
          <Route exact path={`/rules-and-regulations`} component={Policy} />
          <Route exact path={`/board-members`} component={Board} />
          <Route exact path={`/committees`} component={Committees} />
          <Route exact path={`/events`} component={Events} />
          <Route exact path={"/stripe"}>
            <StripePayment amount={100} invoiceEmail="jchamp@abv.bg" />
          </Route>

          <Route path={`/portfolio-details/:eventId`}>
            <EventDetails />
          </Route>
          <Route path={`/blog-details/:eventId`}>
            <EventReflection />
          </Route>

          {/* Redirect pages */}

          <Route exact path={`/success`} component={Success} />
          <Route exact path={`/fail`} component={Fail} />
          <Route exact path={`/404`} component={Error404} />

          {/* Auth pages */}
          {user.token ? (
            <Switch>
              <Route exact path={`/user/:userId`} component={User} />
              <Route exact path={"/purchase-ticket/:userId"}>
                <MemberPurchase setNotification={setNotification} />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route exact path={`/login`}>
                <LogIn setNotification={setNotification} />
              </Route>
              <Route exact path={`/signup`}>
                <SignUp setNotification={setNotification} />
              </Route>
              <Route exact path={"/purchase-ticket"}>
                <NonMemberPurchase setNotification={setNotification} />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          )}
        </Switch>
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
