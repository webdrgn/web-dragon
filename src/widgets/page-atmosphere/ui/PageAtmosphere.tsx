'use client'

import React, { useEffect, useState } from 'react'
import NoiseAnimation from './NoiseAnimation'
import DragonFireflies from './DragonFireflies'
import FollowCursor from './FollowCursor'

export default function PageAtmosphere({
  firefliesCount,
}: {
  firefliesCount: number
}) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      return
    }

    const reveal = () => setIsReady(true)

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(reveal, { timeout: 1800 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timerId = window.setTimeout(reveal, 1)
    return () => window.clearTimeout(timerId)
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <>
      <NoiseAnimation />
      <DragonFireflies count={firefliesCount} />
      <FollowCursor />
    </>
  )
}
