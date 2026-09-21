import React from 'react'
import {
  FaGithub,
  FaTelegramPlane,
  FaEnvelope,
} from 'react-icons/fa'
import {
  AUTHOR_TELEGRAM,
  AUTHOR_GITHUB,
  AUTHOR_EMAIL,
} from '@/config/constants'
import dayjs from 'dayjs'

const ICON_SIZE = 18

export default function Footer() {
  const currentYear = dayjs().year()

  return (
    <footer
      id="contacts"
      className="footer"
    >
      <div className="footer__inner">
        <div className="footer__paths">
          <div className="footer__path">
            <h2 className="footer__path-title">
              Head of Development / Architect
            </h2>
            <p className="footer__path-text">
              Стратегия, архитектура, команда, качество.
            </p>
            <a
              href={AUTHOR_TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__cta"
            >
              Обсудим?
            </a>
            <nav
              className="footer__path-links"
              aria-label="Контакты для сотрудничества"
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
              Подготовка к собеседованиям, прокачка ревью, рост до middle+.
            </p>
            <nav
              className="footer__path-links"
              aria-label="Контакты для менторства"
            >
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
          © {currentYear} webdragon
        </p>
      </div>
    </footer>
  )
}
