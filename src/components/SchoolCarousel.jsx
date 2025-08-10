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

  // 將所有照片攤平成一維陣列
  const allPhotos = schoolData.flatMap((school) =>
    school.photoList.map((photo) => ({
      ...photo,
      schoolId: school.schoolId,
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainImageRef = useRef(null);
  const thumbnailContainerRef = useRef(null);

  const currentPhoto = allPhotos[currentIndex];
  const currentSchool = schoolData.find(
    (s) => s.schoolId === currentPhoto?.schoolId
  );

  // 主圖輪播動畫
  const animateMainImage = (direction) => {
    if (!mainImageRef.current || isTransitioning) return;
    
    setIsTransitioning(true);
    const container = mainImageRef.current;
    
    // 第一階段：舊照片往左或右跑遠100% 同時透明度淡出
    const translateX = direction === 'next' ? '-100%' : '100%';
    
    container.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease-out';
    container.style.transform = `translateX(${translateX})`;
    container.style.opacity = '0';
    
    // 舊照片開始滑動後立即準備新照片（不等待）
    setTimeout(() => {
      // 第二階段：新照片在原地(中間位置)從透明度0開始生出來
      container.style.transition = 'opacity 0.4s ease-in';
      container.style.transform = 'translateX(0)';
      container.style.opacity = '0';
      
      // 立即開始淡入新照片
      setTimeout(() => {
        container.style.opacity = '1';
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 250);
      }, 10);
    }, 150); // 舊照片滑動100ms後就開始新照片淡入
  };

  // 縮圖輪播動畫
  const animateThumbnails = () => {
    if (!thumbnailContainerRef.current) return;

    const container = thumbnailContainerRef.current;
    const itemWidth = 1126 / 4; // 每個縮圖的寬度
    
    // 正常的動畫位移
    const offset = -currentIndex * itemWidth;
    container.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    container.style.transform = `translateX(${offset}px)`;
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    const nextIndex = (currentIndex + 1) % allPhotos.length;
    
    // 如果從最後一筆要跳到第一筆，先無縫移動縮圖到第二輪位置
    if (currentIndex === allPhotos.length - 1) {
      const container = thumbnailContainerRef.current;
      const itemWidth = 1126 / 4;
      // 立即跳到第二輪的最後一筆位置
      container.style.transition = 'none';
      container.style.transform = `translateX(${-(allPhotos.length + currentIndex) * itemWidth}px)`;
    }
    
    animateMainImage("next");
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    
    // 如果從第一筆要跳到最後一筆，先無縫移動縮圖到合適位置
    if (currentIndex === 0) {
      const container = thumbnailContainerRef.current;
      const itemWidth = 1126 / 4;
      // 立即跳到可以往前滑的位置
      container.style.transition = 'none';
      container.style.transform = `translateX(${-allPhotos.length * itemWidth}px)`;
    }
    
    animateMainImage("prev");
    setCurrentIndex(prevIndex);
  };

  const handleThumbnailClick = (targetIndex) => {
    if (isTransitioning || targetIndex === currentIndex) return;

    const direction = targetIndex > currentIndex ? "next" : "prev";
    animateMainImage(direction);
    setCurrentIndex(targetIndex);
  };

  // 當 currentIndex 改變時觸發縮圖動畫
  useEffect(() => {
    animateThumbnails();
  }, [currentIndex]);

  return (
    <>
      {/* 主圖區域 */}
      <div className="w-[1126px] h-[460px] relative">
        <div className="w-full h-full overflow-hidden">
          <div ref={mainImageRef} className="w-full h-full">
            <SchoolMainImage
              photoUrl={getPhotoUrl(currentPhoto)}
              school={currentSchool}
            />
          </div>
        </div>

        {/* 左箭頭 - 位於容器外側 */}
        <div className="absolute z-10 -translate-y-1/2 top-1/2 left-[-40px] cursor-pointer">
          <ArrowLeft onClick={handlePrev} />
        </div>

        {/* 右箭頭 - 位於容器外側 */}
        <div className="absolute z-10 -translate-y-1/2 top-1/2 right-[-40px] cursor-pointer">
          <ArrowRight onClick={handleNext} />
        </div>
      </div>

      {/* 縮圖區域 */}
      <div className="w-[1126px] h-[110px] mt-8 overflow-hidden">
        <div
          ref={thumbnailContainerRef}
          className="flex h-full transition-transform duration-400 ease-out"
          style={{
            width: `${allPhotos.length * 2 * (1126 / 4)}px`,
          }}
        >
          {[...allPhotos, ...allPhotos].map((photo, index) => {
            const school = schoolData.find(
              (s) => s.schoolId === photo.schoolId
            );

            return (
              <div
                key={`${index < allPhotos.length ? 'first' : 'second'}-${photo.schoolId}-${photo.seqNo}`}
                className="flex-shrink-0 "
                style={{ width: `${1126 / 4}px` }}
              >
                <SchoolButton
                  photoUrl={getPhotoUrl(photo)}
                  schoolName={school?.schoolName || ""}
                  onClick={() => handleThumbnailClick(index % allPhotos.length)}
                  isActive={index % allPhotos.length === currentIndex}
                />
              </div>
            );
          })}
        </div>
      </div>

    
    </>
  );
}