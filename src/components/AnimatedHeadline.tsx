'use client';

import React, { useState, useEffect } from 'react';

const AnimatedHeadline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        transformOrigin: 'left center'
      }}
    >
      Hey, I'm Himanshu 👋
    </div>
  );
};

export default AnimatedHeadline; 