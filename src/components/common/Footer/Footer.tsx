import React from "react";
import {
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  AUTHOR_GITHUB,
  AUTHOR_TELEGRAM,
  AUTHOR_HABR,
  AUTHOR_HH_RESUME,
  AUTHOR_LINKEDIN,
} from "@/config/constants";

const ICON_SIZE = 18;

export default function Footer() {
  const resumeUrl = AUTHOR_HH_RESUME || AUTHOR_HABR;
  const resumeLabel = AUTHOR_HH_RESUME ? "Резюме на hh.ru" : "Резюме (Habr Career)";

  return (
    <footer id="contacts" className="footer mt-40 lg:mt-64 mx-auto w-full">
      <div className="footer__inner">
        <div className="footer__cta">
          <h2 className="footer__cta-title">
            Ищете архитектора фронтенд-платформы?
          </h2>
          <p className="footer__cta-text">
            Загляните в резюме и напишите в удобный канал — разберём задачу, зону
            ответственности и формат работы.
          </p>

          <nav className="footer__cta-links" aria-label="Контакты и ссылки">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__text-link"
            >
              <span className="footer__link-icon">
                <FaFileAlt size={ICON_SIZE} aria-hidden />
              </span>
              {resumeLabel}
            </a>
            <a
              href={AUTHOR_TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__text-link"
            >
              <span className="footer__link-icon">
                <FaTelegramPlane size={ICON_SIZE} aria-hidden />
              </span>
              Telegram
            </a>
            <a
              href={AUTHOR_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__text-link"
            >
              <span className="footer__link-icon">
                <FaGithub size={ICON_SIZE} aria-hidden />
              </span>
              GitHub
            </a>
            {AUTHOR_LINKEDIN ? (
              <a
                href={AUTHOR_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__text-link"
              >
                <span className="footer__link-icon">
                  <FaLinkedin size={ICON_SIZE} aria-hidden />
                </span>
                LinkedIn
              </a>
            ) : null}
          </nav>
        </div>

        <p className="text-[#818181] text-sm mt-2 lg:text-base">
          © 2026 webdragon
        </p>
      </div>
    </footer>
  );
}
