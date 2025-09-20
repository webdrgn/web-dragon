import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface DragonFirefliesProps {
  count?: number;
}

const DragonFireflies: React.FC<DragonFirefliesProps> = ({ count = 30 }) => {
  const firefliesRef = useRef<Array<HTMLDivElement | null>>([]);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    firefliesRef.current = firefliesRef.current.slice(0, count);
    firefliesRef.current.forEach((firefly) => {
      if (!firefly) return;
      const container = firefly.parentNode as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      const initialX = Math.random() * containerWidth;
      const initialY = Math.random() * containerHeight;
      gsap.set(firefly, { x: initialX, y: initialY });

      const animateFirefly = () => {
        gsap.to(firefly, {
          x: '+=' + (Math.random() * 100 - 50),
          y: '+=' + (Math.random() * 100 - 50),
          duration: Math.random() * 2 + 1,
          ease: 'power1.inOut',
          onComplete: animateFirefly,
        });
      };

      animateFirefly();
    });
  }, [count]);

  useEffect(() => {
    setIsRender(true);
  }, []);

  return (
    <div className="fireflies-container">
      {Array.from({ length: count }, (_, i) => i).map((index: number) => (
        <div
          ref={(el) => {
            firefliesRef.current[index] = el;
          }}
          key={index}
          className={`firefly ${isRender ? 'shown' : 'hidden'}`}
        />
      ))}
    </div>
  );
};

export default DragonFireflies;
