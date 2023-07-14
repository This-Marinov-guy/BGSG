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
                    Short promo video contest organised by Bulgarian Society Groningen      </h2>
            </div>
            <div className="container mt--80 mb--80">
                <h3>1. Who can enter?
                </h3>
                <p className="mt--10 mb--50">
                    Anyone can enter the contest, apart from the people who are part of the jury panel.
                </p>
                <h3>                2. What are the conditions?

                </h3>

                <p className="mt--10">
                    Submit a video with the following specifications:

                </p>
                <ul style={{ fontSize: '24px' }}>
                    <li>0:30-1:00 min long
                    </li>
                    <li>Has a background music
                    </li>
                    <li>Format 9:16 (instagram reel)
                    </li>
                    <li>Contains photos and video materials provided by BGSG for the purpose (sent to you via email after
                        registration for the contest)
                    </li>
                    <li>Shows the achievements of BGSG

                    </li>
                    <li className="mb--50">Uses the logo of BGSG</li>


                </ul>
                <h3>3. Can I enter multiple times?

                </h3>
                <p className="mt--10 mb--50">
                    Up to 2 videos per person can enter the contest.

                </p>
                <h3>4. How to enter the contest?


                </h3>
                <p className="mt--10 mb--50">
                Submit the videos via WeTransfer or Google Drive to our email address: Bulgariansociety.gro@gmail.com

                </p>
                <h3 >5. What is the deadline?



                </h3>
                <p style={{ color: 'red' }} className="mt--10 mb--50">
                    Deadline: 15th August 2023,23:59

                </p>
                <h3>6. When will I know the result?
                </h3>
                <p className="mt--10 mb--50">
                    Results released on our Instagram channel on the <span style={{ color: 'green' }}>15th of August,2023at 13:00 (The winner will also be contacted via email.)</span>
                </p>
                <h3>7. What is the prize?

                </h3>
                <p className="mt--10 mb--50">
                    The winner will receive a contribution of 50€ from Bulgarian Society Groningen
                </p>
                <h3>8. Who holds the rights to the video?

                </h3>
                <p className="mt--10 mb--50">
                    Bulgarian Society Groningen reserves the right to use the submitted videos for the purpose of promoting the
                    organization.
                </p>
                <h3>9. Any other questions?

                </h3>
                <p className="mt--10 mb--50">
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
