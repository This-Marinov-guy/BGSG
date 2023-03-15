import React, { Component } from "react";
import { FiGlobe } from "react-icons/fi";

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
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li>
                <FiGlobe style={{ color: "black" }} className="google_icon" />
                <div className="google_btn" id="google_translate_element"></div>
              </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
