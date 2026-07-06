'use client'

import React, { useId } from 'react'
import type { IconType } from 'react-icons'
import {
  FaBullseye,
  FaChartLine,
  FaChevronDown,
  FaClipboardList,
  FaWrench,
} from 'react-icons/fa'
import type { CaseStudy, StarLabel } from '../../../../../storage/caseStudies'

const STAR_LABEL_ICONS: Record<StarLabel, IconType> = {
  Ситуация: FaClipboardList,
  Задача: FaBullseye,
  Действия: FaWrench,
  Результат: FaChartLine,
}

function renderStarText(text: string) {
  const parts = text.split(/(\d+\+?%?|\d+ → \d+)/g)

  return parts.map((part, index) => {
    if (/^\d/.test(part)) {
      return <strong key={index}>{part}</strong>
    }
    return part
  })
}

function CaseStudyDt({ label }: { label: StarLabel }) {
  const Icon = STAR_LABEL_ICONS[label]
  return (
    <dt className="case-study__dt">
      <Icon className="case-study__dt-icon" size={15} aria-hidden />
      <span>{label}</span>
    </dt>
  )
}

type CaseStudyAccordionProps = {
  study: CaseStudy
  isOpen: boolean
  onToggle: () => void
}

export default function CaseStudyAccordion({
  study,
  isOpen,
  onToggle,
}: CaseStudyAccordionProps) {
  const panelId = useId()
  const triggerId = useId()

  return (
    <article
      className={`case-study case-study--accordion${isOpen ? ' case-study--open' : ''}`}
    >
      <h3 className="case-study__heading">
        <button
          id={triggerId}
          type="button"
          className="case-study__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="case-study__trigger-text">{study.title}</span>
          <FaChevronDown
            className="case-study__chevron"
            aria-hidden
            size={14}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="case-study__panel"
        hidden={!isOpen}
      >
        {study.proof && (
          <p className="case-study__proof">
            {study.proof}
            {study.proofHighlight && (
              <>
                {' '}
                <strong>{study.proofHighlight}</strong>
              </>
            )}
          </p>
        )}

        <dl className="case-study__star">
          {study.rows.map((row) => (
            <div
              key={row.label}
              className="case-study__row"
            >
              <CaseStudyDt label={row.label} />
              <dd>{renderStarText(row.text)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
