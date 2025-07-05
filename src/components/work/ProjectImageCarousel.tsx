"use client";

import React, { useState, useEffect } from 'react';
import { Icon, Button } from '@once-ui-system/core';
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    if (isTransitioning) return; // Prevent multiple rapid clicks
    
    console.log('Opening modal for image index:', index);
    setIsTransitioning(true);
    setModalImageIndex(index);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Reset transition flag after animation
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const closeModal = () => {
    if (isTransitioning) return; // Prevent multiple rapid clicks
    
    setIsTransitioning(true);
    setIsModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
    
    // Reset transition flag after animation
    setTimeout(() => setIsTransitioning(false), 300);
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

  // Cleanup effect to restore body scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // If no images or only one image, don't show carousel
  if (!images || images.length <= 1) {
    return (
      <>
        <div className={`${styles.carouselContainer} ${isModalOpen ? styles.modalOpen : ''}`}>
          <div className={`${styles.imageWrapper} ${layout === 'featured' ? styles.featuredLayout : ''}`}>
            <img
              className={styles.projectImage}
              src={images?.[0] || "/images/projects/placeholder.jpg"}
              alt={title}
              loading={projectIndex < 2 ? "eager" : "lazy"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (images?.[0]) {
                  openModal(0);
                }
              }}
            />
          </div>
        </div>

        {/* Modal for single image */}
        {isModalOpen && (
          <Portal>
            <div 
              className={styles.modalOverlay} 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
              }}
              onKeyDown={handleKeyDown}
              tabIndex={-1}
            >
              <div className={styles.modalContent} onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}>
                <button className={styles.closeButton} onClick={closeModal}>
                  <Icon name="close" size="m" />
                </button>
                
                <img
                  className={styles.modalImage}
                  src={images?.[0] || "/images/projects/placeholder.jpg"}
                  alt={title}
                />
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }

  // Multi-image carousel and modal
  return (
    <>
      <div className={`${styles.carouselContainer} ${isModalOpen ? styles.modalOpen : ''}`}>
        <div className={`${styles.imageWrapper} ${layout === 'featured' ? styles.featuredLayout : ''}`}>
          <img
            className={styles.projectImage}
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            loading={projectIndex < 2 ? "eager" : "lazy"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openModal(currentImageIndex);
            }}
          />
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prevImage}
                aria-label="Previous image"
              >
                <Icon name="arrowLeft" size="m" />
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={nextImage}
                aria-label="Next image"
              >
                <Icon name="arrowRight" size="m" />
              </button>
            </>
          )}
        </div>
        {/* Image Counter */}
        {images.length > 1 && (
          <div className={styles.imageCounter}>
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>
      {/* Modal for multiple images */}
      {isModalOpen && (
        <Portal>
          <div 
            className={styles.modalOverlay} 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeModal();
            }}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <div className={styles.modalContent} onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}>
              <button className={styles.closeButton} onClick={closeModal}>
                <Icon name="close" size="m" />
              </button>
              <img
                className={styles.modalImage}
                src={images[modalImageIndex]}
                alt={`${title} - Image ${modalImageIndex + 1}`}
              />
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
                  <div className={styles.modalCounter}>
                    {modalImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}