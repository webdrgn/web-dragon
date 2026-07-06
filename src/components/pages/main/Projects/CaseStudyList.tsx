'use client'

import React, { useState } from 'react'
import { caseStudies } from '../../../../../storage/caseStudies'
import CaseStudyAccordion from './CaseStudyAccordion'

export default function CaseStudyList() {
  const [openId, setOpenId] = useState(caseStudies[0]?.id ?? '')

  return (
    <div className="projects__accordion-list" data-aos="fade-up">
      {caseStudies.map((study) => (
        <CaseStudyAccordion
          key={study.id}
          study={study}
          isOpen={openId === study.id}
          onToggle={() =>
            setOpenId((current) => (current === study.id ? '' : study.id))
          }
        />
      ))}
    </div>
  )
}
