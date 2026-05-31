import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">My Journey</h2>
      <span className="section__subtitle">Education & Experience</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">M.Sc. Data Science</h3>
                <span className="qualification__subtitle">
                  Universität Potsdam — Germany
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Oct 2024 - Present
                </div>
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
                  B.Sc. Computer Science & Engineering
                </h3>
                <span className="qualification__subtitle">
                  German University in Cairo — Egypt
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2017 - Jul 2022
                </div>
                <div className="qualification__calender">
                  <i className="uil uil-trophy"></i> Highest Honors · Thesis A+
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Working Student — Test & Integration
                </h3>
                <span className="qualification__subtitle">
                  MBition · Mercedes-Benz Group — Berlin
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Dec 2024 - Present
                </div>
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
                <h3 className="qualification__title">
                  Data Engineering Intern
                </h3>
                <span className="qualification__subtitle">
                  B_labs — Btech, Cairo
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jul 2024 - Sep 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Admin. & Technical Assistant
                </h3>
                <span className="qualification__subtitle">
                  Future of Egypt for Sustainable Development
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Feb 2023 - Feb 2024
                </div>
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
                <h3 className="qualification__title">
                  CS Teaching Assistant
                </h3>
                <span className="qualification__subtitle">
                  German International University — Cairo
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2022 - Jan 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Java Backend Developer — Intern
                </h3>
                <span className="qualification__subtitle">
                  Aman for E-payment, Raya Holding — Giza
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2021 - Oct 2021
                </div>
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

export default Qualification;
