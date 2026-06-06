import React, { useState } from "react";

const isYouTubeOrEmbed = (url) =>
  /youtube\.com|youtu\.be|vimeo\.com/i.test(url);

const WorkItems = ({ item }) => {
  const extraImages = Array.isArray(item.images) ? item.images : [];
  const hasVideo = item.video && item.video.length > 0;
  const [mainImage, setMainImage] = useState(item.image);

  return (
    <div className="work__card" key={item.id}>
      {/* Show main image only if no video */}
      {!hasVideo && (
        <img src={mainImage} alt={item.title} className="work__img" />
      )}

      {hasVideo && (
        <div className="work__video">
          {isYouTubeOrEmbed(item.video) ? (
            <iframe
              src={`${item.video}${item.video.includes('?') ? '&' : '?'}autoplay=1`}
              title={`${item.title} demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video src={item.video} controls preload="metadata" autoPlay muted />
          )}
        </div>
      )}

      {/* Show clickable gallery only if no video */}
      {!hasVideo && extraImages.length > 0 && (
        <div className="work__gallery">
          {extraImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${item.title} screenshot ${idx + 1}`}
              className="work__gallery-img"
              onClick={() => setMainImage(src)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      )}

      <h3 className="work__title">{item.title}</h3>
      {item.description && (
        <p className="work__description">{item.description}</p>
      )}
      {item.tech && <span className="work__tech">{item.tech}</span>}
      <div className="work__links">
        <a
          href={item.github}
          target="_blank"
          rel="noreferrer"
          className="work__button"
        >
          View on GitHub
          <i className="bx bxl-github work__button-icon"></i>
        </a>
        {item.report && (
          <a
            href={item.report}
            target="_blank"
            rel="noreferrer"
            className="work__button work__button--report"
          >
            View Report
            <i className="bx bxs-file-pdf work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
