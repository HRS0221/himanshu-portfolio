"use client";

import React, { useState, useEffect } from 'react';
import { Icon } from '@once-ui-system/core';
import styles from './ProjectImageCarousel.module.scss';
import Portal from "../Portal";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  projectIndex: number;
  layout?: 'featured' | 'grid';
}

export default function ProjectImageCarousel({ 
  images, 
  title, 
  projectIndex,
  layout = 'grid'
}: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Reset to first image when images change
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToModalImage = (index: number) => {
    setModalImageIndex(index);
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      prevModalImage();
    } else if (e.key === 'ArrowRight') {
      nextModalImage();
    }
  };

  // Add/remove modalOpen class to body for disabling hover/transform effects
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modalOpen");
    } else {
      document.body.classList.remove("modalOpen");
    }
    return () => {
      document.body.classList.remove("modalOpen");
    };
  }, [isModalOpen]);

  // Global keyboard listener for modal navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevModalImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextModalImage();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleGlobalKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [isModalOpen, images.length]);

  // Cleanup effect to restore body scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className={`${styles.carouselContainer} ${isModalOpen ? styles.modalOpen : ''}`}>
        <div className={`${styles.imageWrapper} ${layout === 'featured' ? styles.featuredLayout : ''}`}>
          <div className={styles.placeholder}>
            <span>No image available</span>
          </div>
        </div>
      </div>
    );
  }

  const currentImage = images[currentImageIndex];

  return (
    <>
      <div className={`${styles.carouselContainer} ${isModalOpen ? styles.modalOpen : ''}`}>
        <div className={`${styles.imageWrapper} ${layout === 'featured' ? styles.featuredLayout : ''}`}>
          <img
            className={styles.projectImage}
            src={currentImage}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            loading={projectIndex < 2 ? "eager" : "lazy"}
            onClick={() => openModal(currentImageIndex)}
            style={{ cursor: images.length > 1 ? "pointer" : "default" }}
          />
          
          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className={styles.dotIndicators}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentImageIndex ? styles.activeDot : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToImage(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Portal>
          <div 
            className={styles.modalOverlay} 
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>
                <Icon name="close" size="m" />
              </button>
              
              <div className={styles.modalImageContainer}>
                <img
                  className={styles.modalImage}
                  src={images[modalImageIndex]}
                  alt={`${title} - Image ${modalImageIndex + 1}`}
                />
                
                {/* Modal Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      className={`${styles.modalNavButton} ${styles.modalPrevButton}`}
                      onClick={prevModalImage}
                      aria-label="Previous image"
                    >
                      <Icon name="arrowLeft" size="l" />
                    </button>
                    <button
                      className={`${styles.modalNavButton} ${styles.modalNextButton}`}
                      onClick={nextModalImage}
                      aria-label="Next image"
                    >
                      <Icon name="arrowRight" size="l" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Modal Dot Indicators */}
              {images.length > 1 && (
                <div className={styles.modalDotIndicators}>
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.modalDot} ${
                        index === modalImageIndex ? styles.activeModalDot : ""
                      }`}
                      onClick={() => goToModalImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              

            </div>
          </div>
        </Portal>
      )}
    </>
  );
} 