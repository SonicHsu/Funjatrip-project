import { useState, useRef, useEffect } from "react";

export default function useCarousel(allPhotos, thumbnailContainerRef, mainImageRef) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (isAutoPlay && !isTransitioning) handleNext();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const animateMainImage = (direction) => {
    if (!mainImageRef.current || isTransitioning) return;

    setIsTransitioning(true);
    const container = mainImageRef.current;
    const translateX = direction === "next" ? "-100%" : "100%";

    container.style.transition =
      "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease-out";
    container.style.transform = `translateX(${translateX})`;
    container.style.opacity = "0";

    setTimeout(() => {
      container.style.transition = "opacity 0.4s ease-in";
      container.style.transform = "translateX(0)";
      container.style.opacity = "1";

      setTimeout(() => setIsTransitioning(false), 250);
    }, 150);
  };

  const animateThumbnails = () => {
    if (!thumbnailContainerRef.current) return;
    const container = thumbnailContainerRef.current;
    const itemWidth = 1126 / 4;
    const offset = -currentIndex * itemWidth;
    container.style.transition =
      "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    container.style.transform = `translateX(${offset}px)`;
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => (prev + 1) % allPhotos.length);
    animateMainImage("next");
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
    animateMainImage("prev");
  };

  const handleThumbnailClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    animateMainImage(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  useEffect(() => {
    animateThumbnails();
  }, [currentIndex]);

  useEffect(() => {
    if (isAutoPlay) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlay]);

  return {
    currentIndex,
    isAutoPlay,
    setIsAutoPlay,
    handleNext,
    handlePrev,
    handleThumbnailClick,
  };
}
