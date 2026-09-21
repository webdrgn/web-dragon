import React, { useEffect, useRef, useState } from 'react';

const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export default function FollowCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);
  const rafId = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (isTouchDevice() || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handlePointerMove = (e: PointerEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const lerp = (start: number, end: number, amount: number) =>
      start + (end - start) * amount;

    const tick = () => {
      posX.current = lerp(posX.current, targetX.current, 0.18);
      posY.current = lerp(posY.current, targetY.current, 0.18);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;
      }

      rafId.current = window.requestAnimationFrame(tick);
    };

    const { innerWidth, innerHeight } = window;
    posX.current = innerWidth / 2;
    posY.current = innerHeight / 2;
    targetX.current = posX.current;
    targetY.current = posY.current;

    rafId.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div ref={cursorRef} className="follow-cursor" aria-hidden>
      <div className="follow-cursor__ember" />
    </div>
  );
}
