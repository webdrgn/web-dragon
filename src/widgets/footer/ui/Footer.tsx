import React from 'react'
import { FaGithub } from 'react-icons/fa'
import KitIcon, { KIT_ICON_MD } from '@/shared/ui/kit-icon'
import {
  AUTHOR_JOB_TITLE,
  AUTHOR_TELEGRAM,
  AUTHOR_GITHUB,
  AUTHOR_EMAIL,
} from '@/shared/config'
import dayjs from 'dayjs'

export default function Footer() {
  const currentYear = dayjs().year()

  return (
    <footer
      id="contacts"
      className="footer"
    >
      <div className="footer__inner">
        <div className="footer__intro">
          <h2 className="footer__title">{AUTHOR_JOB_TITLE}</h2>
          <p className="footer__text">
            Стратегия, архитектура, команда, качество.
          </p>
        </div>

        <a
          href={AUTHOR_TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__cta"
        >
          <KitIcon name="send" size={KIT_ICON_MD} className="footer__cta-icon" />
          С чего начнём?
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
              <KitIcon name="mail" size={KIT_ICON_MD} />
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
              <FaGithub size={KIT_ICON_MD} aria-hidden />
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
