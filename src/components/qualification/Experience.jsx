import React from "react";
import "./qualification.css";

const Experience = () => {
  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Where I've worked</span>

      <div className="qualification__container container">
        <div className="qualification__sections qualification__single">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Working Student — Test &amp; Integration Strategy
                </h3>
                <span className="qualification__subtitle">
                  MBition, Mercedes-Benz Group — Berlin, Germany
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Dec 2024 - Present
                </div>
                <ul className="qualification__bullets">
                  <li>
                    Built Python-based QA automation integrated into
                    containerized CI/CD pipelines to validate repository
                    compliance and reduce manual review effort.
                  </li>
                  <li>
                    Designed and implemented an LLM-powered internal assistant
                    to support repository compliance and improve developer QA
                    workflows.
                  </li>
                  <li>
                    Built Grafana dashboards and SQL-based monitoring pipelines
                    for repository metrics.
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
                <h3 className="qualification__title">
                  Data Engineering Intern
                </h3>
                <span className="qualification__subtitle">
                  B_labs — Btech, Cairo, Egypt
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jul 2024 - Sep 2024
                </div>
                <ul className="qualification__bullets">
                  <li>
                    Engineered ETL data pipelines for high-volume data using
                    AWS services.
                  </li>
                  <li>
                    Orchestrated data ingestion from multiple on-premise sources
                    into cloud ecosystems.
                  </li>
                  <li>
                    Contributed to the migration strategy from a Data Warehouse
                    to an AWS S3 Data Lakehouse.
                  </li>
                </ul>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Administrative &amp; Technical Assistant
                </h3>
                <span className="qualification__subtitle">
                  Future of Egypt for Sustainable Development — Military Service
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Feb 2023 - Feb 2024
                </div>
                <ul className="qualification__bullets">
                  <li>
                    Responsible for the archive system of the organization.
                  </li>
                  <li>
                    Provided IT support and troubleshooting for office systems,
                    equipment and the network.
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
                <h3 className="qualification__title">
                  Computer Science Teaching Assistant
                </h3>
                <span className="qualification__subtitle">
                  German International University (GIU) — Cairo, Egypt
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2022 - Jan 2023
                </div>
                <ul className="qualification__bullets">
                  <li>
                    Taught Data Structures and Algorithms courses using Java.
                  </li>
                  <li>
                    Created and presented tutorials introducing CS with Python
                    to first-year students.
                  </li>
                  <li>
                    Led tutorials and lab sessions, demonstrating practical
                    implementations of theoretical CS concepts.
                  </li>
                </ul>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Java Backend Developer — Intern
                </h3>
                <span className="qualification__subtitle">
                  Aman for E-payment, Raya Holding — 6th of October, Giza
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2021 - Oct 2021
                </div>
                <ul className="qualification__bullets">
                  <li>
                    Designed RESTful APIs for seamless communication between
                    disparate systems.
                  </li>
                  <li>
                    Worked with 4 web service technologies: REST, JSON, XML and
                    SOAP.
                  </li>
                  <li>
                    Implemented middleware blueprints using the Apache Camel
                    framework.
                  </li>
                  <li>
                    Used Hibernate for ORM mapping to a PostgreSQL database.
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

export default Experience;
