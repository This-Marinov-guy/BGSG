import React from "react";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";
import FooterTwo from "../../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

const Policy = React.memo(() => {
    return (
        <div className="watermark">
            <PageHelmet pageTitle="Policy" />
            <HeaderTwo
                headertransparent="header--transparent"
                colorblack="color--black"
                logoname="logo.png"
            />
            <div className="container mt--200">
                <h2 className="center_text">
                    Terms and conditions:
                </h2>
                <h2 className="center_text">
                    Short promo video contest organised by Bulgarian Society Groningen.        </h2>
            </div>
            <div className="container mt--80 mb--80">
                <h3>1.Who can enter?
                </h3>
                <p className="mt--10 mb--30">
                    Submit a video with the following specifications:

                </p>
                <ul className="mt--10">
                    <li>0:30-1:00 min long
                    </li>
                    <li>Hasa background music
                    </li>
                    <li>Format 9:16 (instagram reel)
                    </li>
                    <li>Contains photos and video materials provided by BGSG for the purpose (sent to you via email after
                        registration for the contest)
                    </li>
                    <li>Shows the achievements of BGSG

                    </li>
                    <li>Uses the logo of BGSG</li>


                </ul>
                <h3>3. Can I enter multiple times?

                </h3>
                <p className="mt--10 mb--30">
                    Up to 2videos per person can enter the contest.

                </p>
                <h3 style={{ color: 'red' }}>5.What is the deadline?



                </h3>
                <p className="mt--10 mb--30">
                    Deadline: 8 August 2023,23:59

                </p>
                <h3>6.When will I know the result?
                </h3>
                <p className="mt--10 mb--30">
                    Results released on our Instagram channel on the <span style={{ color: 'green' }}>15th of August,2023at 13:00 (The winner will also be contacted via email.)</span>
                </p>
                <h3>1.Who can enter?
                </h3>
                <p className="mt--10 mb--30">
                    Submit a video with the following specifications:

                </p>
                <h3>7.What is the prize?

                </h3>
                <p className="mt--10 mb--30">
                    The winner will receive a contribution of 50€ from Bulgarian Society Groningen
                </p>
                <h3>8.Who holds the rights to the video?

                </h3>
                <p className="mt--10 mb--30">
                    Bulgarian Society Groningen reserves the right to use the submitted videos for the purpose of promoting the
                    organization.
                </p>
                <h3>9. Any other questions?

                </h3>
                <p className="mt--10 mb--30">
                    Please contact us via email (bulgariansociety.gro@gmail.com) or through instagram (@bulgariansociety.gro)

                </p>

            </div>
            {/* Start Footer Style  */}
            <FooterTwo />
            {/* End Footer Style  */}
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    );
});

export default Policy;
