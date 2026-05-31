import React from "react";

const isYouTubeOrEmbed = (url) =>
  /youtube\.com|youtu\.be|vimeo\.com/i.test(url);

const WorkItems = ({ item }) => {
  const extraImages = Array.isArray(item.images) ? item.images : [];
  const hasVideo = item.video && item.video.length > 0;

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />

      {hasVideo && (
        <div className="work__video">
          {isYouTubeOrEmbed(item.video) ? (
            <iframe
              src={item.video}
              title={`${item.title} demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video src={item.video} controls preload="metadata" />
          )}
        </div>
      )}

      {extraImages.length > 0 && (
        <div className="work__gallery">
          {extraImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${item.title} screenshot ${idx + 1}`}
              className="work__gallery-img"
            />
          ))}
        </div>
      )}

      <h3 className="work__title">{item.title}</h3>
      {item.description && (
        <p className="work__description">{item.description}</p>
      )}
      {item.tech && <span className="work__tech">{item.tech}</span>}
      <a
        href={item.github}
        target="_blank"
        rel="noreferrer"
        className="work__button"
      >
        View on GitHub
        <i className="bx bxl-github work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
