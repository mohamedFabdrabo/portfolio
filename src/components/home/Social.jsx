import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/in/mohamed-f-abdrabou/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/mohamedFabdrabo"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="mailto:mohamed.fathi.per@gmail.com"
        className="home__social-icon"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
