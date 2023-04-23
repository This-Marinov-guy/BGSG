import React, { useState, useEffect, Fragment } from "react";
import FontFaceObserver from "fontfaceobserver";

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const font1 = new FontFaceObserver("Mozer");
    const font2 = new FontFaceObserver("Archive");

    Promise.all([font1.load(), font2.load()]).then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return <Fragment>{fontsLoaded && children}</Fragment>;
};

export default FontLoader;
