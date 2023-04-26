import React from "react";
import ImageFb from "../ui/ImageFb";

const PortfolioList = (props) => {
  return (
    <React.Fragment>
      {props.target.map((value, index) => (
        <div className={`${props.column} mb--80`} key={index}>
          <div className={`portfolio ${props.styevariation}`}>
            <div
              className={
                props.style === "society"
                  ? "thumbnail-inner"
                  : "thumbnail-inner-2"
              }
            >
              <ImageFb
                className="thumbnail"
                src={`${value.thumbnail}.webp`}
                fallback={`${value.thumbnail}.jpg`}
                alt="Event Images"
              />
            </div>
            <div className="content">
              <div className="inner">
                <div className="portfolio-button">
                  <a
                    className="rn-btn"
                    href={
                      props.style === "society"
                        ? `/event-details/${value.title}`
                        : `/other-event-details/${value.title}`
                    }
                  >
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
