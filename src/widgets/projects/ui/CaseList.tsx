'use client'

import React, { useState } from 'react'
import { cases } from '@/entities/case'
import CaseAccordion from './CaseAccordion'

export default function CaseList() {
  const [openId, setOpenId] = useState(cases[0]?.id ?? '')

  return (
    <div className="projects__accordion-list" data-aos="fade-up">
      {cases.map((caseEntry) => (
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
