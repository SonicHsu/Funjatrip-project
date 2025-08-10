import React, { useRef, useMemo } from "react";
import SchoolMainImageArea from "./SchoolMainImageArea";
import SchoolThumbnailList from "./SchoolThumbnailList";
import useCarousel from "../hooks/useCarousel";

export default function SchoolCarousel({ schoolData }) {
  const baseUrl = "https://jgdev.jgallop.com/funjatrip/images/";

  const getPhotoUrl = (photo) => {
    if (!photo) return "";
    if (typeof photo === "object" && photo.photoPath && photo.photoName) {
      return `${baseUrl}${photo.photoPath}/${photo.photoName}`;
    }
    return "";
  };

  // 攤平成一維陣列
  const allPhotos = useMemo(
    () =>
      schoolData.flatMap((school) =>
        school.photoList.map((photo) => ({
          ...photo,
          schoolId: school.schoolId,
        }))
      ),
    [schoolData]
  );

  const mainImageRef = useRef(null);
  const thumbnailContainerRef = useRef(null);

  const {
    currentIndex,
    isAutoPlay,
    setIsAutoPlay,
    handleNext,
    handlePrev,
    handleThumbnailClick,
  } = useCarousel(allPhotos, thumbnailContainerRef, mainImageRef);

  const currentPhoto = allPhotos[currentIndex];
  const currentSchool = schoolData.find(
    (s) => s.schoolId === currentPhoto?.schoolId
  );

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <>
      <SchoolMainImageArea
        photoUrl={getPhotoUrl(currentPhoto)}
        school={currentSchool}
        onPrev={handlePrev}
        onNext={handleNext}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        mainImageRef={mainImageRef}
      />

      <SchoolThumbnailList
        photos={allPhotos}
        schoolData={schoolData}
        currentIndex={currentIndex}
        onThumbnailClick={handleThumbnailClick}
        thumbnailContainerRef={thumbnailContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        getPhotoUrl={getPhotoUrl}
      />
    </>
  );
}
