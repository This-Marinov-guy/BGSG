// React and Redux Required
import React, { useEffect } from "react";
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
import error404 from "./pages/error404";
import Board from "./pages/information/Board";
import ActiveMembers from "./pages/information/ActiveMembers";

import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import User from "./pages/authentication/User";
import PastEvents from "./pages/information/PastEvents";
import EventDetails from "./elements/EventDetails";
import EventReflection from "./elements/EventReflection";
import Purchase from "./pages/Purchase";
import Error from "./elements/ui/Error";

const Root = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const error = useSelector(selectError);
  const errorMessage = useSelector(selectErrorMsg);

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
        <Switch>
          {error && <Error errorMessage={errorMessage} />}
          <Route exact path="/" component={Home} />

          {/* Element Layot */}
          <Route exact path={`/contact`} component={Contact} />
          <Route exact path={`/about`} component={About} />
          <Route exact path={`/rules-and-regulations`} component={Policy} />
          <Route exact path={`/board-members`} component={Board} />
          <Route exact path={`/active-members`} component={ActiveMembers} />
          <Route exact path={`/past-events`} component={PastEvents} />
          <Route eaxct path={"/purchase-ticket"} component={Purchase} />

          {/* Authentication */}
          <Route exact path={`/login`} component={LogIn} />
          <Route exact path={`/signup`} component={SignUp} />
          {<Route exact path={`/user/:userId`} component={User} />}

          <Route path={`/portfolio-details/:eventId`}>
            <EventDetails />
          </Route>
          <Route path={`/blog-details/:eventId`}>
            <EventReflection />
          </Route>

          {/* Blocks Elements  */}
          <Route path={`/404`} component={error404} />
          <Route component={error404} />
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
serviceWorker.register();
