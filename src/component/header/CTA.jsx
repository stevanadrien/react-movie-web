import React from "react";
import CV from "../../asset/cv.pdf";
const CTA = () => {
  return (
    <div className="CTA">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
