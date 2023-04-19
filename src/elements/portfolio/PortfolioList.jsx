import React, { Component } from "react";
import { Link } from "react-router-dom";

const PostList = [
  {
    id: "0",
    image: "4",
    category: "Members",
    title: "Barista Courses",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    return (
      <React.Fragment>
        {PostList.map((value, index) => (
          <div className={`${column} mb--80`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                  <img
                    className="thumbnail"
                    src={`/assets/images/portfolio/portfolio-${value.image}.jpg`}
                    alt="Event Images"
                  />
              </div>
              <div className="content">
                <div className="inner">
                  <div className="portfolio-button">
                    <a className="rn-btn" href={`/event-details/${index}`}>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
