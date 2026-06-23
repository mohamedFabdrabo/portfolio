import React, { useMemo, useState } from "react";
import "./certificates.css";
import { certificatesData } from "./Data";

const Certificates = () => {
  const INITIAL_VISIBLE_CERTIFICATES = 6;
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = useMemo(() => {
    if (showAll) {
      return certificatesData;
    }

    return certificatesData.slice(0, INITIAL_VISIBLE_CERTIFICATES);
  }, [showAll]);

  const hasMoreCertificates =
    certificatesData.length > INITIAL_VISIBLE_CERTIFICATES;

  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>

      <div className="certificates__container container grid">
        {visibleCertificates.map((certificate) => (
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
                download
                className="certificates__link"
              >
                {certificate.credentialUrl.endsWith('.pdf') ? 'Download Certificate' : 'View credential'}
                <i className={`bx ${certificate.credentialUrl.endsWith('.pdf') ? 'bx-download' : 'bx-link-external'} certificates__link-icon`}></i>
              </a>
            )}
          </article>
        ))}
      </div>

      {hasMoreCertificates && (
        <div className="certificates__actions container">
          <button
            type="button"
            className="certificates__toggle"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
