import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/user";
import { Link, useHistory } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

const HeaderTwo = () => {
  const [isMenuOpened, setIsMenuOpened] = useState();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const history = useHistory();

  var elements = document.querySelectorAll(".has-droupdown > a");
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  let logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;

  return (
    <Fragment>
      <header
        className={`header-area formobile-menu header--transparent default-color}`}
      >
        <div
          className={(isMenuOpened && "menu-open") + " header-wrapper"}
          id="header-wrapper"
        >
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>

          <div className="header-right header-red">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <img
                    src="/assets/images/logo/google.png"
                    alt="google"
                    className="google_icon"
                  />
                  <div
                    className="google_btn"
                    id="google_translate_element"
                  ></div>
                </li>
                <li className="has-droupdown">
                  <Link to="/about">About</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/board-members">Meet the Board</Link>
                    </li>
                    <li>
                      <Link to="/active-members">Meet the Committees</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/past-events">Events</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {user.token && (
                  <li>
                    <Link to={`/user/${user.userId}`}>Profile</Link>
                  </li>
                )}
                <li>
                  <div className="header-btn">
                    {!user.token ? (
                      <a href="/login" className="rn-btn">
                        <span>Log In</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          dispatch(logout());
                          history.push("/");
                        }}
                        className="rn-btn"
                      >
                        <span>Log Out</span>
                      </button>
                    )}
                  </div>
                </li>
              </ul>
            </nav>

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={() => {
                  setIsMenuOpened(true);
                }}
                className="menutrigger text-red"
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
      <div className="container header-middle"></div>
    </Fragment>
  );
};

export default HeaderTwo;