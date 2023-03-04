import React, { Component } from "react";
import { Link } from "react-router-dom";

const PostList = [
  {
    image: "4",
    category: "Development",
    title: "Barista Courses",
  },
  {
    image: "5",
    category: "Development",
    title: "Barista Courses",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    return (
      <React.Fragment>
        {PostList.map((value, index) => (
          <div className={`${column}`} key={index}>
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
                  <p>{value.category}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href="/portfolio-details">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <Link className="link-overlay" to="/portfolio-details"></Link>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
