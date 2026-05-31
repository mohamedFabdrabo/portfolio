import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mohamed Fathi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#education" className="footer__link">
              Education
            </a>
          </li>

          <li>
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://linkedin.com/in/mohamed-f-abdrabou/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/mohamedFabdrabo"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="mailto:mohamed.fathi.per@gmail.com"
            className="footer__social-link"
          >
            <i className="bx bx-envelope"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; {new Date().getFullYear()} Mohamed Fathi. Built with React.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
