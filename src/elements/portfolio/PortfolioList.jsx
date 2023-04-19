import React from "react";

const PostList = [
  {
    id: "0",
    image: "4",
    category: "Members",
    title: "Barista Courses",
  },
];

const PortfolioList = (props) => {
  return (
    <React.Fragment>
      {PostList.map((value, index) => (
        <div className={`${props.column} mb--80`} key={index}>
          <div className={`portfolio ${props.styevariation}`}>
            <div
              className={
                props.style === "1" ? "thumbnail-inner" : "thumbnail-inner-2"
              }
            >
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
};

export default PortfolioList;
