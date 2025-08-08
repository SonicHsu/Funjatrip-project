import { useState } from "react";

import DestinationsButton from "./DestinationButton";
import SwitcherButton from "./SwitcherButton";

import hotballonY from "../assets/images/index/hotballon_y.svg";
import hotballonG from "../assets/images/index/hotballon_g.svg";
import hotballonR from "../assets/images/index/hotballon_r.svg";

export default function DestinationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerWidth = 1280; // 單組寬度

  // 切換按鈕點擊事件，改成對應索引
  const handleSwitch = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-8 ">
      <div className=" py-8 flex flex-col items-center justify-center space-y-3">
        <h2 className="text-4xl font-medium">各國遊學趣</h2>
        <p>各國有很多知名學校，給你不同的體驗</p>
      </div>

      <div
        className="w-[1280px] h-[560px]  mx-auto overflow-hidden"
        style={{
          backgroundImage:
            "url('https://jgdev.jgallop.com/funjatrip/images/frontpage/blocks/20190430054453840.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="flex h-full transition-transform duration-500 "
          style={{
            width: containerWidth * 2,
            transform: `translateX(-${currentIndex * containerWidth}px)`,
          }}
        >
          <div className="w-[1280px]  h-full flex justify-center items-center">
            <DestinationsButton
              iconHotballon01={hotballonY}
              iconHotballon02={hotballonG}
              iconHotballon03={hotballonR}
              HotballonStyle="1"
              buttonStyle="down"
            />
            <DestinationsButton
              iconHotballon01={hotballonY}
              iconHotballon02={hotballonG}
              iconHotballon03={hotballonR}
              HotballonStyle="2"
              buttonStyle="up"
            />
            <DestinationsButton
              iconHotballon01={hotballonR}
              iconHotballon02={hotballonY}
              HotballonStyle="3"
              buttonStyle="down"
            />
            <DestinationsButton
              iconHotballon01={hotballonG}
              iconHotballon02={hotballonR}
              iconHotballon03={hotballonY}
              HotballonStyle="4"
              buttonStyle="up"
            />
          </div>

          <div className="w-[1280px]  h-full flex justify-center items-center">
            <DestinationsButton
              iconHotballon01={hotballonY}
              iconHotballon02={hotballonG}
              iconHotballon03={hotballonR}
              HotballonStyle="1"
              buttonStyle="down"
            />
            <DestinationsButton
              iconHotballon01={hotballonY}
              iconHotballon02={hotballonG}
              iconHotballon03={hotballonR}
              HotballonStyle="2"
              buttonStyle="up"
            />
            <DestinationsButton
              iconHotballon01={hotballonR}
              iconHotballon02={hotballonY}
              HotballonStyle="3"
              buttonStyle="down"
            />
            <DestinationsButton
              iconHotballon01={hotballonG}
              iconHotballon02={hotballonR}
              iconHotballon03={hotballonY}
              HotballonStyle="4"
              buttonStyle="up"
            />
          </div>
        </div>
      </div>

      <div className="h-auto w-full bg-white flex items-center justify-center py-2 space-x-3">
        <SwitcherButton
          active={currentIndex === 0}
          onClick={() => handleSwitch(0)}
        />
        <SwitcherButton
          active={currentIndex === 1}
          onClick={() => handleSwitch(1)}
        />
      </div>
    </section>
  );
}
