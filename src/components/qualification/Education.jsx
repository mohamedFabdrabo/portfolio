import React from "react";
import "./qualification.css";

const Education = () => {
  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">Where I learned</span>

      <div className="qualification__container container">
        <div className="qualification__sections qualification__single">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">M.Sc. Data Science</h3>
                <span className="qualification__subtitle">
                  Universität Potsdam — Germany
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Oct 2024 - Present
                </div>
                <ul className="qualification__bullets">
                  <li>
                    Focus on mathematical foundations: linear algebra,
                    probability and Bayesian statistics.
                  </li>
                  <li>
                    Deep learning, machine learning and data engineering
                    coursework with applied projects.
                  </li>
                </ul>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Semester Abroad</h3>
                <span className="qualification__subtitle">
                  German Int. University Berlin — Germany
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2021 - Mar 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Sc. Computer Science &amp; Engineering
                </h3>
                <span className="qualification__subtitle">
                  German University in Cairo — Egypt
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2017 - Jul 2022
                </div>
                <div className="qualification__calender">
                  <i className="uil uil-trophy"></i> Highest Honors (A+) ·
                  Thesis A+
                </div>
                <ul className="qualification__bullets">
                  <li>
                    Bachelor Thesis: Brain Hemorrhage Detection from CT Images
                    using Deep Learning.
                  </li>
                  <li>
                    Core CS coursework: data structures, algorithms, OOP,
                    databases, computer vision, AI.
                  </li>
                </ul>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
