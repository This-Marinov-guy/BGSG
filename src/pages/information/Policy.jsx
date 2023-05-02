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
        <h3>Article 1. Structure of the organization and the roles within
        </h3>
        <p className="mt--40 ml--10">
          1. The Bulgarian Society Groningen (BGSG) provides a form for member registration. Completion of the registration form will provide the individual with a WhatsApp payment request including the yearly membership fee of €5. Once the payment has been received, the new member will then be added to the two WhatsApp groups: one for discussion of events, and one for communication between members of the association. Once individuals have gained membership, they will have the ability to join internal events and receive discounts from sponsors, receive discounts for open events, and attend all organised events.

        </p>
        <p className="mt--40 ml--10">
          2. The BGSG is structurally made up of the Board and the various committees. The Board is responsible for the execution of all tasks and events and formulates a plan of action for the upcoming academic year. The Board is fully informed about and has access to all activities that take place within the organisation. These must be clearly defined at all times.


        </p>
        <p className="mt--40 ml--10">
          3.  The board consists of the President, Secretary, Treasurer, External  Relations, Creative Director, Internal Affairs, and Public Relations. Each board member has a specific role that they must adhere to:

        </p>
      
        <p className="mt--40 ml--30">
          a. The role of the President is approval of ideas, taking initiative, and overseeing the executions of tasks within the Society.

        </p>
        <p className="mt--40 ml--30">
          b. The role of the Secretary is to communicate with the members of the association, ensure all member registrations are processed accordingly, take notes during the meetings, upkeep the Google Drive, and assist the president in their duties.


        </p>
        <p className="mt--40 ml--30">
          c. The role of the Treasurer is organisation and processing of all financial matters, this includes:  monitoring the income of the organisation, seeking out sources for funding, helping with the yearly fees, monitoring the spending, ensuring the association is running within the provided budget, doing the accounting of the organisation and distributing the budget to the committees accordingly.


        </p>
        <p className="mt--40 ml--30">
          d. The role of External Relations is to connect with third parties such as venues, prospective sponsors, other student associations.

        </p>
        <p className="mt--40 ml--30">
          e. The role of the Creative Director is to create the general idea and direction of how Bulgarian Society Groningen is going to present itself to the public.

        </p>
        <p className="mt--40 ml--30">
          f. The role of Internal Affairs is to ensure that there is no turmoil within the association and solve and prevent any conflicts that might arise. They should also make sure everyone feels welcome and included. Both Bulgarians and foreigners.

        </p>
        <p className="mt--40 ml--30">
          g. The role of Public relations is taking photos during events, supporting the creative director in their vision, and maintaining the social media of the Society.

        </p>
        
        <p className="mt--40 ml--10">
          4.   Within the association there are various committees, each responsible for the organisation and execution of events. These include: Personal development and Sports committee, Social & Cultural committee. Each committee handles events of a certain nature:

        </p>
        <p className="mt--40 ml--30">
          a. The  Personal development and Sports committee is responsible for the organisation of sports events and events such as lectures and workshops, in addition to events related to networking and career.

        </p>
        <p className="mt--40 ml--30">
          b. The Social & Culture committee is responsible for the organisation of events such as dinners, parties, and entertainment nights.


        </p>
        <p className="mt--40 ml--30">
          c. At the beginning of each academic year, the board and committees make a decision to either keep or change the positions, names, committees, and number of board members. This is done through careful analysis of the demand from the previous academic year. Once this has been decided, the application process may commence. The existing board will then proceed to evaluate applicants through a series of interviews, and through this, will select members for the new board. Once the process of selecting the board members has been completed, the members of the committees are selected using the same procedure.


        </p>
        <h3 className="mt--80">Article 2. Rules and Regulations of the organisation</h3>
        <p className="mt--40">
          Hereby the goals and intentions of the student association Bulgarian Society Groningen are stated.


        </p>
        <h3 className="mt--80">Article 3. Goals for the organisation </h3>
        <p className="mt--40 ml--10">
          1. First and foremost we aim to bring the Bulgarian students in the city of Groningen together.
          This goal will be achieved by actively promoting the organization through social media, posters, word-of-mouth, and other media.


        </p>
        <p className="mt--40 ml--10">
          2. We are looking to create a supportive and welcoming environment for the members of the association.
          We are going to achieve this goal through  workshops, meet and greets, traditional dinners, parties, sports events.

        </p>
        <p className="mt--40 ml--10">
          3. We want to create a stimulating environment for the members of the association.
          We are going to achieve this goal through career workshops, networking events, debates, and lectures.

        </p>
        <p className="mt--40 ml--10">
          4. Nurture and develop the Bulgarian culture inside of the association.
          We will achieve this goal through traditional Bulgarian dances, cooking traditional Bulgarian food, Bulgarian music, politics, poetry, literature, and theater.

        </p>
        <p className="mt--40 ml--10">
          5. We want to represent the Bulgarian culture in the city of Groningen.
          We are going to achieve this goal by collaborating with fellow student organizations in the creation of mixed events

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
