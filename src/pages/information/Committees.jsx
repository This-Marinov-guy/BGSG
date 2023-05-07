import React from "react";
import Breadcrumb from "../../elements/common/Breadcrumb";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import WindowShift from "../../elements/ui/WindowShift";
import TeamTwo from "../../elements/TeamTwo";

const COMMITTEES = {
  SPORT: [
    {
      id: 1,
      name: "Milena |",
      title: " Chair",
      description: '19 | BSc International Business',
      interests: 'Extreme Sports, Reading, Marketing, Painting'
    },
    {
      id: 2,
      name: "Jordanka |",
      title: " PR Manager",
      description: '21 | BSc Psychology',
      interests: 'Gym, Dancing, Personal Development'
    },
    {
      id: 3,
      name: "Emil |",
      title: " Treasurer",
      description: '20 | BSc International Business',
      interests: 'Finance, Personal Development, Reading, Music, Sports'
    },
    {
      id: 4,
      name: "Gergana |",
      title: " Secretary",
      description: '19 | BSc International Business',
      interests: 'Synchronized Swimming, Photography, Mathematics, Reading'
    }
  ],
  CULTURE: [
    {
      id: 1,
      name: "Tsvetina |",
      title: "Chair",
      description: '27 | Master International Communication',
      interests: 'Traveling, Festivals, Cooking, Cultural Activities'
    },
    {
      id: 2,
      name: "Margarita |",
      title: "Treasurer",
      description: '20 | BSc Biomedical engineering',
      interests: 'Dancing, Traveling, Baking'
    },
    {
      id: 3,
      name: "Elena |",
      title: "PR Manager",
      description: '20 | BSc Marketing Management',
      interests: 'Finance, Personal Development, Reading, Music, Sports'
    },
    {
      id: 4,
      name: "Maria-Kristi |",
      title: "Secretary",
      description: '19 | BA International and European Law',
      interests: 'Reading, Music, Cooking'
    }
  ]
}

const Committees = React.memo(() => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Committees" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Meet the Committees"} />
      {/* End Breadcrump Area */}

      {/* Start Team Area  */}
      <div className=" ptb--120 bg_color--5">
        <WindowShift
          main="Personal development and Sports"
          secondary="Social and Culture"
          mainContent={
            <div>
              <h2 className="center_text mb--20">
                Personal Development and Sports
              </h2>
              <br />
              <TeamTwo folder='sport' target={COMMITTEES.SPORT} />
            </div>
          }
          secondaryContent={
            <div>
              <h2 className="center_text mb--20">Social and Culture</h2>
              <br />
              <TeamTwo folder='culture' target={COMMITTEES.CULTURE} />
            </div>
          }
        />
      </div>
      {/* End Team Area  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
});

export default Committees;
