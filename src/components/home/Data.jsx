import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Mohamed Fathi</h1>
      <h3 className="home__subtitle">Software Engineer &amp; Data Scientist</h3>
      <p className="home__description">
        Based in Potsdam, Germany. I build software and data systems — from
        backend services and cloud pipelines to machine learning and deep
        learning models. I enjoy turning ideas into reliable, well-engineered
        products and I'm always curious about what comes next.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
            fill="var(--container-color)"
          ></path>
          <path
            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Data;
