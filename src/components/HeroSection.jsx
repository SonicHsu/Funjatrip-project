import SearchBar from "./SearchBar";
import ExploreButton from "./ExploreButton";

import btnIcon1 from "../assets/images/index/btn_icon1.svg";
import btnIcon2 from "../assets/images/index/btn_icon2.svg";

export default function HeroSection() {
  return (
    <section>
      <div
        className="flex justify-center"
        style={{
          backgroundImage:
            "url('https://jgdev.jgallop.com/funjatrip/images/frontpage/blocks/201901011000412790.jpg')",
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
            放假，給孩子一個有趣的假期
          </h1>
          <div className="w-[540px] h-[60px]">
            <SearchBar />
          </div>
        </div>

        
      </div>

      <div className=" h-[148px] w-full flex justify-center items-center space-x-12">
         <ExploreButton iconImage={btnIcon1} />
         <ExploreButton iconImage={btnIcon2} />
      </div>
    </section>
  );
}
