import React, { useEffect, useRef } from 'react'

const NoiseAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      return
    }

    let frame = 0
    let rafId = 0
    const patternSize = 128
    const patternRefreshInterval = 12
    const patternAlpha = 8

    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) {
      return
    }

    const patternCanvas = document.createElement('canvas')
    patternCanvas.width = patternSize
    patternCanvas.height = patternSize
    const patternCtx = patternCanvas.getContext('2d')
    if (!patternCtx) {
      return
    }

    const patternData = patternCtx.createImageData(patternSize, patternSize)
    const patternPixelDataLength = patternSize * patternSize * 4

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
    }

    const update = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 155 + 100
        patternData.data[i] = value
        patternData.data[i + 1] = value
        patternData.data[i + 2] = value
        patternData.data[i + 3] = patternAlpha
      }

      patternCtx.putImageData(patternData, 0, 0)
    }

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      const pattern = ctx.createPattern(patternCanvas, 'repeat')
      if (!pattern) {
        return
      }
      ctx.fillStyle = pattern
      ctx.fillRect(0, 0, width, height)
    }

    const loop = () => {
      if (++frame % patternRefreshInterval === 0) {
        update()
        draw()
      }

      rafId = window.requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize, { passive: true })
    resize()
    loop()

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} className="grain" aria-hidden />
}

export default NoiseAnimation
