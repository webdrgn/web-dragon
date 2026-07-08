import React from 'react'
import {
  FaFileAlt,
  FaGithub,
  FaTelegramPlane,
  FaEnvelope,
} from 'react-icons/fa'
import {
  AUTHOR_TELEGRAM,
  AUTHOR_HABR,
  AUTHOR_HH_RESUME,
  AUTHOR_GITHUB,
  AUTHOR_EMAIL,
} from '@/config/constants'

const ICON_SIZE = 18

export default function Footer() {
  const resumeUrl = AUTHOR_HH_RESUME || AUTHOR_HABR
  const resumeLabel = AUTHOR_HH_RESUME
    ? 'Резюме на hh.ru'
    : 'Habr Career'

  return (
    <footer
      id="contacts"
      className="footer"
    >
      <div className="footer__inner">
        <div className="footer__paths">
          <div className="footer__path">
            <h2 className="footer__path-title">Tech Lead · Architect</h2>
            <p className="footer__path-text">
              Выстраиваю фронтенд-платформы, ускоряю поставку и снижаю техдолг.
              Разберём архитектуру и формат работы с командой.
            </p>
            <nav
              className="footer__path-links"
              aria-label="Контакты для сотрудничества"
            >
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
                href={`mailto:${AUTHOR_EMAIL}`}
                className="footer__text-link"
              >
                <span className="footer__link-icon">
                  <FaEnvelope size={ICON_SIZE} aria-hidden />
                </span>
                Email
              </a>
            </nav>
          </div>

          <div className="footer__path-divider" aria-hidden />

          <div className="footer__path">
            <h2 className="footer__path-title">Менторство</h2>
            <p className="footer__path-text">
              Подготовка к собеседованиям, прокачка code review, выход на
              middle+. Опыт с обеих сторон стола — как интервьюер и ментор.
            </p>
            <nav
              className="footer__path-links"
              aria-label="Контакты для менторства"
            >
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
                href="#playunmute"
                className="footer__text-link"
              >
                Playunmute
              </a>
            </nav>
          </div>
        </div>

        <nav
          className="footer__social"
          aria-label="Профили и публикации"
        >
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
        </nav>

        <p className="footer__copy">
          © 2026 webdragon
        </p>
      </div>
    </footer>
  )
}
