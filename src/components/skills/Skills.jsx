import React from "react";
import "./skills.css";

/*
 * Skills are grouped into small focused categories so they're easier to scan.
 * To edit: just add/remove items in the `skillGroups` array below.
 */
const skillGroups = [
  {
    title: "Programming Languages",
    icon: "uil uil-brackets-curly",
    items: ["Python", "Java", "SQL", "JavaScript", "HTML5 / CSS3"],
  },
  {
    title: "Data Science & ML",
    icon: "uil uil-chart-line",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Bayesian Statistics",
      "Deep Learning",
    ],
  },
  {
    title: "Data Engineering & Big Data",
    icon: "uil uil-database",
    items: ["Apache Spark", "Dask", "Pandas / NumPy", "Hadoop", "AWS Glue", "ETL Pipelines"],
  },
  {
    title: "Cloud & DevOps",
    icon: "uil uil-cloud",
    items: ["AWS", "Google Cloud Platform", "Docker", "Linux", "CI/CD", "Git"],
  },
  {
    title: "Backend & Web",
    icon: "uil uil-server-network",
    items: ["Flask", "Spring Boot", "REST APIs", "Hibernate", "Maven", "JUnit"],
  },
  {
    title: "Databases",
    icon: "uil uil-database-alt",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "NoSQL"],
  },
  {
    title: "Computer Vision",
    icon: "uil uil-eye",
    items: ["OpenCV", "Scikit-image", "YOLOv5", "Image Segmentation"],
  },
  {
    title: "Tools & IDEs",
    icon: "uil uil-wrench",
    items: ["VS Code", "IntelliJ", "PyCharm", "Jupyter", "Google Colab", "Grafana"],
  },
  {
    title: "Spoken Languages",
    icon: "uil uil-globe",
    items: ["Arabic (Native)", "English (Fluent)", "German (B1 — learning)"],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical toolbox</span>

      <div className="skills__grid container">
        {skillGroups.map((group) => (
          <div className="skills__content" key={group.title}>
            <div className="skills__header">
              <i className={`${group.icon} skills__group-icon`}></i>
              <h3 className="skills__title">{group.title}</h3>
            </div>

            <ul className="skills__list">
              {group.items.map((item) => (
                <li className="skills__chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
