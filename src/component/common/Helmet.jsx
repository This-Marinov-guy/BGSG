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
            content="Welcome to the official Bulgarian society of Groningen! We aim to bring the Bulgarian people of Groningen
    together, develop the Bulgarian culture and to showcase it among internationals in this beautiful city in the Netherlands."
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
