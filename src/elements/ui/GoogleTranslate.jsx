import React, { useState, useEffect } from "react";

const GoogleTranslate = () => {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       includedLanguages: "en,bg,nl",
  //       layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
  //     },
  //     "google_translate_element"
  //   );
  // };

  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  return (
    <li className="google_btn_item">
      <img
        src="/assets/images/logo/google.png"
        alt="google"
        className="google_icon"
      />
      <div className="google_btn" id="google_translate_element"></div>{" "}
    </li>
  );
};

export default GoogleTranslate;
