import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  let logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;

  const [isMenuOpened, setIsMenuOpened] = useState();
  return (
    <header className={`header-area`}>
      <div
        className={(isMenuOpened && "menu-open") + " header-wrapper"}
        id="header-wrapper"
      >
        <div className="header-left">
          <div className="logo">
            <a href="/">{logoUrl}</a>
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li style={{ marginRight: "40px" }}>
                <img
                  src="/assets/images/logo/google.png"
                  alt="google"
                  className="google_icon"
                />
                <div className="google_btn" id="google_translate_element"></div>
              </li>
            </ul>
          </nav>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span
              onClick={() => {
                setIsMenuOpened(true);
              }}
              className="menutrigger text-white"
            >
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span
              onClick={() => {
                setIsMenuOpened(false);
              }}
              className="closeTrigger"
            >
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
