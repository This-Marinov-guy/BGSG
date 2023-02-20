import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

let TeamLeader = {
  images: "01",
  title: "Lazar (President)",
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
};

let TeamContent = [
  {
    images: "05",
    title: "Radost (Creative Manager)",
    designation: ["Study: MA Euroculture", "Age: 23", "Interests: Customizing clothes, Embroidery, Dancing, Sustainability"],
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
    images: "06",
    title: "Tsveta (PR Manager)",
    designation: ["Study: BA European languages and Cultures", "Age: 20", "Interests: Reading, Travelling, Cinema, Pilates"],
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
    images: "07",
    title: "Pavella (Secretary)",
    designation: ["Study: MSc Medicine", "Age: 21", "Interests: Tennis, Music, Painitng"],
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
    images: "02",
    title: "Sava (Internal Relations)",
    designation: ["Study: BA Game Design", "Age: 20", "Interests: Gym, Kickboxing, Gaming"],
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
    images: "03",
    title: "Konstantin (External Relations)",
    designation: ["Study: BA CMGT", "Age: 20", "Interests: Concerts, Movies, Enterprenuership, Sports"],
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
    images: "04",
    title: "Dimitar (Treasurer)",
    designation: ["Study: BA International Business", "Age: 21", "Interests: Music, DJ-ing, Business, Jiu-Jitsu"],
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
        <div
          style={{ width: "400px", height: "600px" }}
          className="row single-item"
        >
          <div className="team">
            <div className="thumbnail">
              <img
                src={`/assets/images/team/team-${TeamLeader.images}.jpg`}
                alt="Blog Images"
              />
            </div>
            <div className="content">
              <h4 className="title">{TeamLeader.title}</h4>
              {TeamLeader.designation.map((value) => (
                <p className="designation">{value}</p>
              ))}
            </div>
            <ul className="social-icon">
              {TeamLeader.socialNetwork.map((social, index) => (
                <li key={index}>
                  <a href={`${social.url}`}>{social.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          {TeamContent.map((value, i) => (
            <div className={`${column}`} key={i}>
              <div className="team">
                <div className="thumbnail">
                  <img
                    src={`/assets/images/team/team-${value.images}.jpg`}
                    alt="Blog Images"
                  />
                </div>
                <div className="content">
                  <h4 className="title">{value.title}</h4>
                  {value.designation.map((value) => (
                    <p className="designation">{value}</p>
                  ))}
                </div>
                <ul className="social-icon">
                  {value.socialNetwork.map((social, index) => (
                    <li key={index}>
                      <a href={`${social.url}`}>{social.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Team;
