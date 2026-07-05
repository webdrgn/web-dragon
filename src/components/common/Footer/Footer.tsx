import React from 'react'
import {
  FaFileAlt,
  FaTelegramPlane
} from 'react-icons/fa'
import { SiHabr } from 'react-icons/si'
import {
  AUTHOR_TELEGRAM,
  AUTHOR_HABR,
  AUTHOR_HABR_PROFILE,
  AUTHOR_HH_RESUME,
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
      className="footer mt-40 lg:mt-64 mx-auto w-full"
    >
      <div className="footer__inner">
        <div className="footer__cta">
          <h2 className="footer__cta-title">
            Ищете техлида, который пересоберет ваш фронтенд / ментора,
            который прокачает команду?
          </h2>
          <p className="footer__cta-text">
            Напишите в удобный канал. Покажу, как выстроить архитектуру,
            ускорить разработку, снизить техдолг и вырастить разработчиков,
            которым можно доверять.
          </p>

          <nav
            className="footer__cta-links"
            aria-label="Контакты и ссылки"
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__text-link"
            >
              <span className="footer__link-icon">
                <FaFileAlt
                  size={ICON_SIZE}
                  aria-hidden
                />
              </span>
              {resumeLabel}
            </a>
            <a
              href={AUTHOR_HABR_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__text-link"
            >
              <span className="footer__link-icon">
                <SiHabr
                  size={ICON_SIZE}
                  aria-hidden
                />
              </span>
              Habr
            </a>
            <a
              href={AUTHOR_TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__text-link"
            >
              <span className="footer__link-icon">
                <FaTelegramPlane
                  size={ICON_SIZE}
                  aria-hidden
                />
              </span>
              Telegram
            </a>
          </nav>
        </div>

        <p className="text-[#818181] text-sm mt-2 lg:text-base">
          © 2026 webdragon
        </p>
      </div>
    </footer>
  )
}
