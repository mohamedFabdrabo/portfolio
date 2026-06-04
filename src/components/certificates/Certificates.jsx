import React from "react";
import "./certificates.css";
import { certificatesData } from "./Data";

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>

      <div className="certificates__container container grid">
        {certificatesData.map((certificate) => (
          <article className="certificates__card" key={certificate.id}>
            <div className="certificates__meta">
              <span className="certificates__type">{certificate.type}</span>
              <span className="certificates__date">{certificate.date}</span>
            </div>

            <h3 className="certificates__title">{certificate.title}</h3>
            <p className="certificates__provider">{certificate.provider}</p>

            {certificate.skills && (
              <p className="certificates__skills">{certificate.skills}</p>
            )}

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="certificates__link"
              >
                View credential
                <i className="bx bx-link-external certificates__link-icon"></i>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
