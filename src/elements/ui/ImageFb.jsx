import React from "react";

const ImageFb = (props) => {
  return (
    <picture>
      <source
        srcSet={props.src}
        type={props.type ? props.type : 'image/webp'}
      />
      <img
        src={props.fallback}
        className={props.className}
        alt="Image with fallback"
      />
    </picture>
  );
};

export default ImageFb;
