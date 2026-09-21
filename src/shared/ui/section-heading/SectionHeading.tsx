import React from 'react'

export default function SectionHeading({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  const headingClass = ['section-heading', className].filter(Boolean).join(' ')

  return (
    <div className="section-heading-row" data-aos="fade-up">
      <h2 id={id} className={headingClass}>
        {children}
      </h2>
    </div>
  )
}
