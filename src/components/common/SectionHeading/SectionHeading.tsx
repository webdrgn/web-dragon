import React from 'react'
import Image from 'next/image'
import { publicAsset } from '@/utils/publicAsset'

type SectionHeadingProps = {
  id?: string
  mascot: string
  className?: string
  children: React.ReactNode
}

export default function SectionHeading({
  id,
  mascot,
  className = '',
  children,
}: SectionHeadingProps) {
  const headingClass = ['section-heading', className].filter(Boolean).join(' ')

  return (
    <div className="section-heading-row" data-aos="fade-up">
      <Image
        src={publicAsset(mascot)}
        alt=""
        width={220}
        height={220}
        className="section-heading-row__mascot"
        aria-hidden
        unoptimized
      />
      <h2 id={id} className={headingClass}>
        {children}
      </h2>
    </div>
  )
}
