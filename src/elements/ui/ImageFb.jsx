import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageFb = (props) => {
  return (
    <picture>
      <source
        srcSet={props.src} 
        type={props.type ? props.type : "image/webp"}
      />
      <LazyLoadImage 
        src={props.fallback} 
        className={props.className}
        style={props.style}
        alt={props.alt ? props.alt : "Fallback image"}
      />
    </picture>
  );
};

export default ImageFb;