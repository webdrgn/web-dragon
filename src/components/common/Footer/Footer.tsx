import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
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
        <a
          href={AUTHOR_TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__cta"
        >
          Обсудим?
        </a>

        <nav
          className="footer__channels"
          aria-label="Контакты"
        >
          <a
            href={`mailto:${AUTHOR_EMAIL}`}
            className="footer__text-link"
          >
            <span className="footer__link-icon">
              <FaEnvelope size={ICON_SIZE} aria-hidden />
            </span>
            Email
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
        </nav>

        <p className="footer__copy">
          © {currentYear} webdragon
        </p>
      </div>
    </footer>
  )
}
