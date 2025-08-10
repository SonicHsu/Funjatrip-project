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
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const mainImageRef = useRef(null);
  const thumbnailContainerRef = useRef(null);
  const autoPlayRef = useRef(null);

  const currentPhoto = allPhotos[currentIndex];
  const currentSchool = schoolData.find(
    (s) => s.schoolId === currentPhoto?.schoolId
  );

  // 自動播放功能
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (isAutoPlay && !isTransitioning) {
        // 直接調用下一張的邏輯，避免閉包問題
        setCurrentIndex(prev => {
          const nextIndex = (prev + 1) % allPhotos.length;
          
          // 處理縮圖的無縫切換
          setTimeout(() => {
            if (prev === allPhotos.length - 1) {
              const container = thumbnailContainerRef.current;
              if (container) {
                const itemWidth = 1126 / 4;
                container.style.transition = 'none';
                container.style.transform = `translateX(${-(allPhotos.length + prev) * itemWidth}px)`;
              }
            }
          }, 0);
          
          return nextIndex;
        });
        
        // 觸發主圖動畫
        if (mainImageRef.current && !isTransitioning) {
          animateMainImage("next");
        }
      }
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // 滑鼠事件處理
  const handleMouseEnter = () => {
    setIsAutoPlay(false);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
    startAutoPlay();
  };

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

  // 自動播放初始化和清理
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [isAutoPlay, isTransitioning]); // 添加依賴

  // 當 isAutoPlay 狀態改變時，重新啟動自動播放
  useEffect(() => {
    if (isAutoPlay) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
  }, [isAutoPlay]);

  return (
    <>
      {/* 主圖區域 */}
      <div 
        className="w-[1126px] h-[460px] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
      <div 
        className="w-[1126px] h-[110px] mt-8 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
                className="flex-shrink-0"
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