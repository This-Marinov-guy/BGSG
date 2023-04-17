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
          Bulgarian Society Groningen Rules and Regulations
        </h2>
      </div>
      <div className="container mt--80 mb--80">
        <p className="mt--40">
          The Bulgarian Society Groningen (BGSG) provides a form for member
          registration. Completion of the registration form will provide the
          individual with a WhatsApp payment request including the yearly
          membership fee of €5. Once the payment has been received, the new
          member will then be added to the two WhatsApp groups: one for
          discussion of events, and one for communication between members of the
          association. Once individuals have gained membership, they will have
          the ability to join internal events and receive discounts from
          sponsors, receive discounts for open events, and attend all organised
          events.
        </p>
        <p className="mt--40">
          The BGSG is structurally made up of the Board and the various
          committees. The Board is responsible for the execution of all tasks
          and events and formulates a plan of action for the upcoming academic
          year. The Board is fully informed about and has access to all
          activities that take place within the organisation. These must be
          clearly defined at all times.
        </p>
        <p className="mt--40">
          The Board is responsible for creating a safe and friendly environment
          in which members within the organisation interact with each other
          respectfully. Violence and/or discrimination of any sort is
          prohibited. This includes discrimination on the basis of race,
          religious beliefs, gender, sexual orientation, ethnicity, or illness.
        </p>
        <p className="mt--40">
          The board consists of the President, Secretary, Treasurer, External
          Relations, Creative Director, Internal Affairs, and Public Relations.
          Each board member has a specific role that they must adhere to:
        </p>
        <p className="mt--40">
          The role of the President is approval of ideas, taking initiative, and
          overseeing the executions of tasks within the Society.
        </p>
        <p className="mt--40">
          The role of the Secretary is to communicate with the members of the
          association, ensure all member registrations are processed
          accordingly, take notes during the meetings, upkeep the Google Drive,
          and assist the president in their duties.
        </p>
        <p className="mt--40">
          The role of the Treasurer is organisation and processing of all
          financial matters, this includes: monitoring the income of the
          organisation, seeking out sources for funding, helping with the yearly
          fees, monitoring the spending, ensuring the association is running
          within the provided budget, and distributing the budget to the
          committees accordingly.
        </p>
        <p className="mt--40">
          The role of External Relations is to connect with third parties such
          as venues, prospective sponsors, other student associations.
        </p>
        <p className="mt--40">
          The role of the Creative Director is to create the general idea and
          direction of how Bulgarian Society Groningen is going to present
          itself to the public.
        </p>
        <p className="mt--40">
          The role of Internal Affairs is to ensure that there is no turmoil
          within the association and solve and prevent any conflicts that might
          arise. They should also make sure everyone feels welcome and included.
          Both Bulgarians and foreigners.
        </p>
        <p className="mt--40">
          The role of Public relations is taking photos during events,
          supporting the creative director in their vision, and maintaining the
          social media of the Society.
        </p>
        <p className="mt--40">
          Within the association there are various committees, each responsible
          for the organisation and execution of events. These include: Sports
          committee, Education & Personal development committee and Social &
          Cultural committee. Each committee handles events of a certain nature:
          The Sports committee is responsible for the organisation of sports
          events.
        </p>
        <p className="mt--40">
          The Education & Personal development committee is responsible for the
          organisation of events such as lectures and workshops, in addition to
          events related to networking and career.
        </p>
        <p className="mt--40">
          The Social & Culture committee is responsible for the organisation of
          events such as dinners, parties and entertainment nights.
        </p>
        <p className="mt--40">
          At the beginning of each academic year the board and committees make a
          decision to either keep or change the positions, names, committees and
          number of board members. This is done through careful analysis of the
          demand from the previous academic year. Once this has been decided,
          the application process may commence. The existing board will then
          proceed to evaluate applicants through a series of interviews, and
          through this, will select members for the new board. It should be
          noted that board members cannot hold the same role for two consecutive
          academic years. Once the process of selecting the board members has
          been completed, the members of the committees are selected using the
          same procedure.
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
