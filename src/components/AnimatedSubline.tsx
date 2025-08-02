'use client';

import React, { useState, useEffect } from 'react';

const specializations = [
  "Large Language Models",
  "Generative AI",
  "Computer Vision",
  "Deep Learning"
];

const AnimatedSubline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeSpeed = isDeleting ? 5 : 10; // Much faster typing
    const deleteSpeed = 3; // Much faster deleting
    const pauseTime = 800; // Shorter pause

    const typeText = () => {
      const currentSpecialization = specializations[currentIndex];
      
      if (isTyping && !isDeleting) {
        // Typing phase
        if (currentText.length < currentSpecialization.length) {
          setTimeout(() => {
            setCurrentText(currentSpecialization.slice(0, currentText.length + 1));
          }, typeSpeed);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else if (isDeleting) {
        // Deleting phase
        if (currentText.length > 0) {
          setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, deleteSpeed);
        } else {
          // Finished deleting, move to next specialization
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % specializations.length);
        }
      }
    };

    const timer = setTimeout(typeText, 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, isTyping]);

  return (
    <div style={{ minHeight: '3.5rem', display: 'flex', alignItems: 'center' }}>
      <span>
        I specialize in{' '}
        <span 
          style={{ 
            color: 'var(--color-brand-strong)',
            fontWeight: '600',
            borderRight: '2px solid var(--color-brand-strong)',
            animation: 'blink 1s infinite',
            paddingRight: '2px'
          }}
        >
          {currentText}
        </span>
        <span style={{ opacity: 0 }}>|</span>
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { border-color: var(--color-brand-strong); }
          51%, 100% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedSubline; 