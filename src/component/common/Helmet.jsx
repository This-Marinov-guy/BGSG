import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>BGSG || {this.props.pageTitle} </title>
          <meta
            name="description"
            content="The official website of Bulgarian Society Groningen! We aim to bring the Bulgarian people of Groningen
    together"
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
