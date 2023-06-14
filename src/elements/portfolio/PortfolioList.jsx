import React from "react";
import ImageFb from "../ui/ImageFb";
import { Link } from "react-router-dom";

const PortfolioList = (props) => {
  return (
    <React.Fragment>
      {props.target.map((value, index) => (
        <div style={{marginLeft: '15px', marginRight: '15px'}} className={`portfolio ${props.column} mb--80 ${props.stylevariation}`} key={index}>
          <Link
            to={
              props.style === "society"
                ? `/event-details/${value.title}`
                : `/other-event-details/${value.title}`
            }
            className={
              props.style === "society"
                ? "thumbnail-inner"
                : "thumbnail-inner-2"
            }
          >
            <ImageFb
              className="thumbnail portfolio-img"
              src={`${value.thumbnail}.webp`}
              fallback={`${value.thumbnail}.jpg`}
              alt="Event Images"
            />
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PortfolioList;
