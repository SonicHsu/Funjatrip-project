import { useEffect, useRef } from "react";

import SearchBar from "./SearchBar";
import ExploreButton from "./ExploreButton";

import btnIcon1 from "../assets/images/index/btn_icon1.svg";
import btnIcon2 from "../assets/images/index/btn_icon2.svg";

export default function HeroSection({ block, onSearchVisibilityChange }) {
  if (!block) return null;

  const bgPhoto =
    block.photoList && block.photoList.length > 0 ? block.photoList[0] : null;

  const baseUrl = "https://jgdev.jgallop.com/funjatrip/images/";

  const bgImageUrl = bgPhoto
    ? `${baseUrl}${bgPhoto.blockPhotoPath}/${bgPhoto.blockPhotoName}`
    : "";

  const searchRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onSearchVisibilityChange(true);  // 搜尋框在視窗內
        } else {
          onSearchVisibilityChange(false); // 搜尋框滾出去了
        }
      },
      { threshold: 0 } // 只要有部分進出視窗就觸發
    );

    if (searchRef.current) {
      observer.observe(searchRef.current);
    }

    return () => {
      if (searchRef.current) {
        observer.unobserve(searchRef.current);
      }
    };
  }, [onSearchVisibilityChange]);

  return (
    <section>
      <div
        className="flex justify-center"
        style={{
          backgroundImage: `url('${bgImageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "88vh",
        }}
      >
        <div className="h-full  flex flex-col items-center justify-center space-y-4">
          <h1
            className="text-5xl text-white font-medium"
            style={{ textShadow: "2px 2px  rgba(0,0,0,0.5)" }}
          >
            {block.mainTitle}
          </h1>
          <div className="w-[540px] h-[60px]" ref={searchRef}>
            <SearchBar />
          </div>
        </div>
      </div>

      <div className=" h-[148px] w-full flex justify-center items-center space-x-12">
        <ExploreButton
          icon={btnIcon1}
          title="我想自由行"
          subtitle="只想專心參加國際學校課程"
        />
        <ExploreButton
          icon={btnIcon2}
          title="我想跟團"
          subtitle="上課+跟團旅遊，世界那麼大都想去看看"
        />
      </div>
    </section>
  );
}
