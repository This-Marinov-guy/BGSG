import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

let TeamContent = [
  {
    id: 1,
    images: "01",
    title: "Lazar | President",
    designation: [
      "Study: MSc Artificial Intelligence",
      "Age: 25",
      "Interests: Jiu-Jitsu, Programming, Reading",
    ],
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 2,
    images: "05",
    title: "Radost | Creative Manager",
    designation: [
      "Study: MA Euroculture",
      "Age: 23",
      "Interests: Customizing clothes, Embroidery, Dancing, Sustainability",
    ],
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 3,
    images: "06",
    title: "Tsveta | PR Manager",
    designation: [
      "Study: BA European languages and Cultures",
      "Age: 20",
      "Interests: Reading, Travelling, Cinema, Pilates",
    ],
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    id: 4,
    images: "07",
    title: "Pavella | Secretary",
    designation: [
      "Study: MSc Medicine",
      "Age: 21",
      "Interests: Tennis, Music, Painting",
    ],
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    id: 5,
    images: "02",
    title: "Sava | Internal Relations",
    designation: [
      "Study: BA Game Design",
      "Age: 20",
      "Interests: Gym, Kickboxing, Gaming",
    ],
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    id: 6,
    images: "04",
    title: "Dimitar | Treasurer",
    designation: [
      "Study: BA International Business",
      "Age: 21",
      "Interests: Music, DJ-ing, Business, Jiu-Jitsu",
    ],
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    id: 7,
    images: "03",
    title: "Konstantin | External Relations",
    designation: [
      "Study: BA CMGT",
      "Age: 20",
      "Interests: Concerts, Movies, Enterprenuership, Sports",
    ],
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
];

class Team extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="column">
            {TeamContent.map((value) => (
              <div
                className={
                  value.id % 2 !== 0
                    ? "team_member_container flex_left"
                    : "team_member_container flex_right"
                }
                key={value.id}
              >
                <img
                  className="team_img"
                  src={`/assets/images/team/team-${value.images}.jpg`}
                  alt="Blog Images"
                />
                <div className="content">
                  <h3 className="title">{value.title}</h3>
                  {value.designation.map((value, index) => (
                    <p key={index} className="designation">
                      {value}
                    </p>
                  ))}

                  {value.socialNetwork.map((social, index) => (
                    <a
                      style={{ margin: "20px" }}
                      key={index}
                      href={`${social.url}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
