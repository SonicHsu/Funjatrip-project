import React, { useEffect, useRef, useState } from "react";

import SchoolMainImage from "./SchoolMainImage";
import SchoolButton from "./SchoolButton";
import ArrowLeft from "../ui/ArrowLeft";
import ArrowRight from "../ui/ArrowRight";

export default function SchoolCarousel({ schoolData }) {
  const baseUrl = "https://jgdev.jgallop.com/funjatrip/images/";

  const getPhotoUrl = (photo) => {
    if (!photo) return "";
    if (typeof photo === "object" && photo.photoPath && photo.photoName) {
      return `${baseUrl}${photo.photoPath}/${photo.photoName}`;
    }
    return "";
  };

  const allPhotos = schoolData.flatMap((school) =>
    school.photoList.map((photo) => ({
      ...photo,
      schoolId: school.schoolId,
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPhoto = allPhotos[currentIndex];
  const currentSchool = schoolData.find(
    (s) => s.schoolId === currentPhoto.schoolId
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <>
      <div className="w-[1126px] h-[460px] relative ">
        <SchoolMainImage
          photoUrl={getPhotoUrl(currentPhoto)}
          school={currentSchool}
        />

        <div className="absolute z-10 -translate-y-1/2 top-1/2 left-[-40px] cursor-pointer">
          <ArrowLeft onClick={handlePrev} />
        </div>

        <div className="absolute z-10 -translate-y-1/2 top-1/2 right-[-40px] cursor-pointer">
          <ArrowRight onClick={handleNext} />
        </div>
      </div>

      <div className="w-[1126px] h-[110px] mt-8 flex justify-between overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => {
          const thumbIndex = (currentIndex + i) % allPhotos.length; // 從主圖後一張開始
          const thumbPhoto = allPhotos[thumbIndex];
          const thumbSchool = schoolData.find(
            (s) => s.schoolId === thumbPhoto.schoolId
          );

          return (
            <SchoolButton
              key={thumbIndex}
              photoUrl={getPhotoUrl(allPhotos[thumbIndex])}
              schoolName={thumbSchool.schoolName}
              onClick={() => setCurrentIndex(thumbIndex)}
            />
          );
        })}
      </div>
    </>
  );
}
