import React, { Component } from "react";

class Header extends Component {
  render() {
    let logoUrl = (
      <img src="/assets/images/logo/logo.png" alt="Digital Agency" />
    );

    return (
      <header className={`header-area`}>
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
