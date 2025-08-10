
import SchoolButton from "./SchoolButton";

export default function SchoolThumbnailList({
  photos,
  schoolData,
  currentIndex,
  onThumbnailClick,
  thumbnailContainerRef,
  onMouseEnter,
  onMouseLeave,
  getPhotoUrl,
}) {
  return (
    <div
      className="w-[1126px] h-[110px] mt-8 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={thumbnailContainerRef}
        className="flex h-full transition-transform duration-400 ease-out"
        style={{
          width: `${photos.length * 2 * (1126 / 4)}px`,
        }}
      >
        {[...photos, ...photos].map((photo, index) => {
          const school = schoolData.find((s) => s.schoolId === photo.schoolId);
          return (
            <div
              key={`${index < photos.length ? "first" : "second"}-${photo.schoolId}-${photo.seqNo}`}
              className="flex-shrink-0"
              style={{ width: `${1126 / 4}px` }}
            >
              <SchoolButton
                photoUrl={getPhotoUrl(photo)}
                schoolName={school?.schoolName || ""}
                onClick={() => onThumbnailClick(index % photos.length)}
                isActive={index % photos.length === currentIndex}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
