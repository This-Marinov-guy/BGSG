import React, { Component } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ImageFb from "./ui/ImageFb";

let TeamContent = [
  {
    id: 1,
    images: "01",
    name: "Lazar",
    title: "| President",
    designation: [
      "Study: MSc Artificial Intelligence",
      "Age: 25",
      "Interests: Jiu-Jitsu, Programming, Reading",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/vdvends/",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/lazar-popov-bb4321200/",
      },
    ],
  },
  {
    id: 2,
    images: "05",
    name: "Radost",
    title: "| Creative Manager",
    designation: [
      "Study: MA Euroculture",
      "Age: 23",
      "Interests: Customizing clothes, Embroidery, Dancing, Sustainability",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/radostlozanova/",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/radost-lozanova/",
      },
    ],
  },
  {
    id: 3,
    images: "06",
    name: "Tsveta",
    title: "| PR Manager",
    designation: [
      "Study: BA European languages and Cultures",
      "Age: 20",
      "Interests: Reading, Travelling, Cinema, Pilates",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/tsveta_xx/?hl=en",
      },
    ],
  },
  {
    id: 4,
    images: "07",
    name: "Pavella",
    title: "| Secretary",
    designation: [
      "Study: MSc Medicine",
      "Age: 21",
      "Interests: Tennis, Music, Painting",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://instagram.com/_pavella_g?igshid=YmMyMTA2M2Y=",
      },
    ],
  },
  {
    id: 5,
    images: "02",
    name: "Sava",
    title: "| Internal Relations",
    designation: [
      "Study: BA Game Design",
      "Age: 20",
      "Interests: Gym, Kickboxing, Gaming",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/n0t_stalking/",
      },
    ],
  },
  {
    id: 6,
    images: "04",
    name: "Dimitar",
    title: "| Treasurer",
    designation: [
      "Study: BA International Business",
      "Age: 21",
      "Interests: Music, DJ-ing, Business, Jiu-Jitsu",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/dimitarstamatovv/",
      },
    ],
  },
  {
    id: 7,
    images: "03",
    name: "Konstantin",
    title: "| External Relations",
    designation: [
      "Study: BA CMGT",
      "Age: 20",
      "Interests: Concerts, Movies, Enterprenuership, Sports",
    ],
    socialNetwork: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/konstantin_sonev/",
      },
    ],
  },
];

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container team_info">
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
                <ImageFb
                  className="team_img"
                  src={`/assets/images/team/team-${value.images}.webp`}
                  fallback={`/assets/images/team/team-${value.images}.jpg`}
                  alt="Blog Images"
                />
                <div
                  className={
                    value.id % 2 !== 0
                      ? "team_member_border-1"
                      : "team_member_border-2"
                  }
                >
                  <h2 className="title">{value.name}</h2>
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
                      target="_blank"
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
