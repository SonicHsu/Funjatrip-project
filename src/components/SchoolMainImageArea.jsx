import SchoolMainImage from "./SchoolMainImage";
import ArrowLeft from "../ui/ArrowLeft";
import ArrowRight from "../ui/ArrowRight";

export default function SchoolMainImageArea({
  photoUrl,
  school,
  onPrev,
  onNext,
  onMouseEnter,
  onMouseLeave,
  mainImageRef,
}) {
  return (
    <div
      className="w-[1126px] h-[460px] relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full h-full overflow-hidden">
        <div ref={mainImageRef} className="w-full h-full">
          <SchoolMainImage photoUrl={photoUrl} school={school} />
        </div>
      </div>

      {/* 左箭頭 */}
      <div className="absolute z-10 -translate-y-1/2 top-1/2 left-[-40px] cursor-pointer">
        <ArrowLeft onClick={onPrev} />
      </div>

      {/* 右箭頭 */}
      <div className="absolute z-10 -translate-y-1/2 top-1/2 right-[-40px] cursor-pointer">
        <ArrowRight onClick={onNext} />
      </div>
    </div>
  );
}
