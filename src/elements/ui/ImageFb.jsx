import React from "react";

const ImageFb = (props) => {
  return (
    <picture>
      <source
        srcSet={props.src}
        type={props.type ? props.type : "image/webp"}
      />
      <img
        src={props.fallback}
        className={props.className}
        style={props.style}
        alt={props.alt ? props.alt : "Fallback image"}
      />
    </picture>
  );
};

export default ImageFb;
