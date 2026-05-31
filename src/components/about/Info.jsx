import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3+ Years in Data & SW</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">ML, Data, Backend</span>
      </div>

      <div className="about__box">
        <i className="bx bx-globe about__icon"></i>

        <h3 className="about__title">Languages</h3>
        <span className="about__subtitle">EN · AR · DE (B1)</span>
      </div>
    </div>
  );
};

export default Info;
