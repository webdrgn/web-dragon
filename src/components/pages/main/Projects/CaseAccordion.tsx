'use client'

import React, { useId } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import type { CaseStudy } from '../../../../../storage/caseStudies'

function renderCaseText(text: string) {
  const parts = text.split(/(\d+\+?%?|\d+ → \d+)/g)

  return parts.map((part, index) => {
    if (/^\d/.test(part)) {
      return <strong key={index}>{part}</strong>
    }
    return part
  })
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
        <p className="case__proof">{renderCaseText(caseEntry.description)}</p>
      </div>
    </article>
  )
}
