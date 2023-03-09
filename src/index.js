// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

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
import error404 from "./pages/error404";
import Board from "./pages/information/Board";
import ActiveMembers from "./pages/information/ActiveMembers";

import LogIn from "./pages/authentication/LogIn";
import SignUp from "./pages/authentication/SignUp";
import PastEvents from "./pages/information/PastEvents";
import PortfolioDetails from "./elements/PortfolioDetails";
import EventReflection from "./elements/EventReflection";

const eventDetails = [
  {
    title: "Bulgarian Dinner",
    date: "18th January",
    attendance: "56",
    comments: "20",
    text: ["a", "b", "c", "d", "f", "g"],
    bgImage: '12',
    images: ["01", "02", "03"],
  },
];
class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Element Layot */}
            <Route exact path={`/contact`} component={Contact} />
            <Route exact path={`/about`} component={About} />
            <Route exact path={`/board-members`} component={Board} />
            <Route exact path={`/active-members`} component={ActiveMembers} />
            <Route exact path={`/past-events`} component={PastEvents} />

            {/* Authentication */}
            <Route exact path={`/login`} component={LogIn} />
            <Route exact path={`/signup`} component={SignUp} />

            <Route path={`/portfolio-details`} component={PortfolioDetails} />
            <Route path={`/blog-details`}>
              <EventReflection event={eventDetails[0]} />
            </Route>

            {/* Blocks Elements  */}
            <Route path={`/404`} component={error404} />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
