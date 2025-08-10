import { useState } from "react";

import TourCard from "./TourCard";
import SwitcherButton from "./SwitcherButton";
import ArrowLeft from "../ui/ArrowLeft";
import ArrowRight from "../ui/ArrowRight";

export default function ToursSection({ block }) {
  if (!block) return null;

  const toursData = block.travelList;

  const itemsPerPage = 6;
  const totalPages = Math.ceil(toursData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0); // 0-based index

  // 計算當前頁要顯示的資料
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentData = toursData.slice(startIndex, endIndex);

  // 補空卡片，保持6格
  if (currentData.length < itemsPerPage) {
    const emptySlots = itemsPerPage - currentData.length;
    currentData = [
      ...currentData,
      ...Array.from({ length: emptySlots }, () => null),
    ];
  }

  const goPrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section className="mt-20">
      <div className=" py-8 flex flex-col items-center justify-center space-y-3">
        <h2 className="text-4xl font-medium">{block.mainTitle}</h2>
        <p>{block.subTitle}</p>
      </div>

      <div className="w-[1126px] h-auto mx-auto relative">
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-3 gap-4">
            {currentData.map((tourItem, idx) =>
              tourItem ? (
                <TourCard key={idx} tourItem={tourItem} />
              ) : (
                <div key={idx} className="invisible">
                  <TourCard  />
                </div>
              )
            )}
          </div>
        </div>

        {/* 左箭頭 */}
        <div
          className="absolute z-10 -translate-y-1/2 top-1/2 left-[-50px] cursor-pointer"
          onClick={goPrev}
        >
          <ArrowLeft />
        </div>

        {/* 右箭頭 */}
        <div
          className="absolute z-10 -translate-y-1/2 top-1/2 right-[-50px] cursor-pointer"
          onClick={goNext}
        >
          <ArrowRight />
        </div>

        <div className="h-auto w-full bg-white flex items-center justify-center py-2 space-x-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <SwitcherButton
              key={idx}
              active={idx === currentPage}
              onClick={() => setCurrentPage(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
