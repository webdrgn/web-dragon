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

function StarTerm({ label }: { label: StarLabel }) {
  const Icon = STAR_LABEL_ICONS[label]
  return (
    <dt className="case__dt">
      <Icon className="case__dt-icon" size={15} aria-hidden />
      <span>{label}</span>
    </dt>
  )
}

type CaseAccordionProps = {
  caseEntry: CaseStudy
  isOpen: boolean
  onToggle: () => void
}

export default function CaseAccordion({
  caseEntry,
  isOpen,
  onToggle,
}: CaseAccordionProps) {
  const panelId = useId()
  const triggerId = useId()

  return (
    <article
      className={`case case--accordion${isOpen ? ' case--open' : ''}`}
    >
      <h3 className="case__heading">
        <button
          id={triggerId}
          type="button"
          className="case__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="case__trigger-text">{caseEntry.title}</span>
          <FaChevronDown className="case__chevron" aria-hidden size={14} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="case__panel"
        hidden={!isOpen}
      >
        {caseEntry.proof && (
          <p className="case__proof">
            {caseEntry.proof}
            {caseEntry.proofHighlight && (
              <>
                {' '}
                <strong>{caseEntry.proofHighlight}</strong>
              </>
            )}
          </p>
        )}

        <dl className="case__star">
          {caseEntry.rows.map((row) => (
            <div key={row.label} className="case__row">
              <StarTerm label={row.label} />
              <dd>{renderStarText(row.text)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
