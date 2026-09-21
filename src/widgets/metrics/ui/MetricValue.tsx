'use client'

import React, { useEffect, useRef, useState } from 'react'

type ParsedMetric =
  | {
      kind: 'range'
      from: number
      to: number
      joiner: string
      suffix: string
    }
  | {
      kind: 'single'
      to: number
      prefix: string
      suffix: string
    }
  | {
      kind: 'static'
      text: string
    }

function parseMetricValue(value: string): ParsedMetric {
  const rangeMatch = value.match(/^(\d+)\s*[–-]\s*(\d+)(\+?)(%?)$/)
  if (rangeMatch) {
    return {
      kind: 'range',
      from: Number(rangeMatch[1]),
      to: Number(rangeMatch[2]),
      joiner: '–',
      suffix: `${rangeMatch[3]}${rangeMatch[4]}`,
    }
  }

  const singleMatch = value.match(/^([−-])?(\d+)(\+?)(%?)$/)
  if (singleMatch) {
    return {
      kind: 'single',
      to: Number(singleMatch[2]),
      prefix: singleMatch[1] === '-' ? '−' : singleMatch[1] ?? '',
      suffix: `${singleMatch[3]}${singleMatch[4]}`,
    }
  }

  return { kind: 'static', text: value }
}

function formatMetric(parsed: ParsedMetric, progress: number): string {
  if (parsed.kind === 'static') {
    return parsed.text
  }

  if (parsed.kind === 'range') {
    const current = Math.round(parsed.from + (parsed.to - parsed.from) * progress)
    return `${parsed.from}${parsed.joiner}${current}${parsed.suffix}`
  }

  const current = Math.round(parsed.to * progress)
  return `${parsed.prefix}${current}${parsed.suffix}`
}

export default function MetricValue({ value }: { value: string }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(() => {
    const parsed = parseMetricValue(value)
    return parsed.kind === 'static' ? value : formatMetric(parsed, 0)
  })

  useEffect(() => {
    const parsed = parseMetricValue(value)
    if (parsed.kind === 'static') {
      setDisplay(value)
      return
    }

    const root = rootRef.current
    if (!root) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    let frameId = 0
    let hasStarted = false

    const play = () => {
      if (hasStarted) {
        return
      }
      hasStarted = true

      const durationMs = 1100
      const startedAt = performance.now()

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / durationMs)
        const eased = 1 - (1 - progress) ** 3
        setDisplay(formatMetric(parsed, eased))

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick)
        } else {
          setDisplay(value)
        }
      }

      frameId = window.requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          play()
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(root)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frameId)
    }
  }, [value])

  return (
    <div ref={rootRef} className="metrics__value">
      {display}
    </div>
  )
}
