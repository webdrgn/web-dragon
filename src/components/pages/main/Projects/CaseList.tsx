'use client'

import React, { useState } from 'react'
import { caseStudies } from '../../../../../storage/caseStudies'
import CaseAccordion from './CaseAccordion'

export default function CaseList() {
  const [openId, setOpenId] = useState(caseStudies[0]?.id ?? '')

  return (
    <div className="projects__accordion-list" data-aos="fade-up">
      {caseStudies.map((caseEntry) => (
        <CaseAccordion
          key={caseEntry.id}
          caseEntry={caseEntry}
          isOpen={openId === caseEntry.id}
          onToggle={() =>
            setOpenId((current) => (current === caseEntry.id ? '' : caseEntry.id))
          }
        />
      ))}
    </div>
  )
}
