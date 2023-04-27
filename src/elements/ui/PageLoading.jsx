import React from "react";
import ImageFb from "./ImageFb";

const PageLoading = () => {
  return (
    <div className="center_screen">
      <ImageFb
        className="logo"
        src="/assets/images/logo/logo.webp"
        fallback="/assets/images/logo/logo.jpg"
        alt="Logo"
      />
      <h3>Loading...</h3>
    </div>
  );
};

export default PageLoading;
