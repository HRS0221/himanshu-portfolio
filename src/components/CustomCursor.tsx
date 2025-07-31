'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clickBursts, setClickBursts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' ||
          target.closest('a') || target.closest('button')) {
        setIsInteractive(true);
      } else {
        setIsInteractive(false);
      }
    };

    const handleMouseLeave = () => {
      setIsInteractive(false);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const handleClick = (e: MouseEvent) => {
      const burstId = Date.now();
      setClickBursts(prev => [...prev, { id: burstId, x: e.clientX, y: e.clientY }]);
      
      // Remove the burst after animation completes
      setTimeout(() => {
        setClickBursts(prev => prev.filter(burst => burst.id !== burstId));
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const createStarBurst = (x: number, y: number) => {
    const stars = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * 2 * Math.PI;
      const distance = 50 + Math.random() * 30;
      const flyX = Math.cos(angle) * distance;
      const flyY = Math.sin(angle) * distance;
      
      stars.push(
        <div
          key={i}
          className="click-star"
          style={{
            '--fly-x': `${flyX}px`,
            '--fly-y': `${flyY}px`,
          } as React.CSSProperties}
        />
      );
    }
    return stars;
  };

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isInteractive ? 'interactive' : ''}`}
        style={{
          left: mousePosition.x - 14,
          top: mousePosition.y - 14,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Cursor trail dots */}
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
            opacity: isVisible ? 1 : 0,
          }}
        />
      ))}

      {/* Star trail effects */}
      {[...Array(8)].map((_, index) => (
        <div
          key={`star-${index}`}
          className="cursor-star"
          style={{
            left: mousePosition.x - 5,
            top: mousePosition.y - 5,
            opacity: isVisible ? 1 : 0,
          }}
        />
      ))}

      {/* Space dust effects */}
      {[...Array(6)].map((_, index) => (
        <div
          key={`dust-${index}`}
          className="cursor-dust"
          style={{
            left: mousePosition.x - 3,
            top: mousePosition.y - 3,
            opacity: isVisible ? 1 : 0,
          }}
        />
      ))}

      {/* Click burst effects */}
      {clickBursts.map((burst) => (
        <div
          key={burst.id}
          className="click-burst"
          style={{
            left: burst.x - 25,
            top: burst.y - 25,
          }}
        >
          {createStarBurst(burst.x, burst.y)}
        </div>
      ))}
    </>
  );
} 