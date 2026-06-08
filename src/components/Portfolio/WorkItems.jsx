import React, { useState } from "react";

const isYouTubeOrEmbed = (url) =>
  /youtube\.com|youtu\.be|vimeo\.com/i.test(url);

const WorkItems = ({ item }) => {
  const imageList =
    Array.isArray(item.images) && item.images.length > 0
      ? item.images
      : [item.image];
  const hasVideo = item.video && item.video.length > 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imageList.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="work__card" key={item.id}>
      {!hasVideo && (
        <div className="work__media" aria-label={`${item.title} screenshots`}>
          <img
            src={imageList[currentImageIndex]}
            alt={`${item.title} screenshot ${currentImageIndex + 1}`}
            className="work__img"
            loading="lazy"
          />

          {imageList.length > 1 && (
            <>
              <button
                type="button"
                className="work__media-btn work__media-btn--prev"
                onClick={goToPrevImage}
                aria-label="Previous screenshot"
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <button
                type="button"
                className="work__media-btn work__media-btn--next"
                onClick={goToNextImage}
                aria-label="Next screenshot"
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </>
          )}
        </div>
      )}

      {hasVideo && (
        <div className="work__media work__video">
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
