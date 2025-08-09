import { useState } from "react";

import DestinationsButton from "./DestinationButton";
import SwitcherButton from "./SwitcherButton";

import hotballonY from "../assets/images/index/hotballon_y.svg";
import hotballonG from "../assets/images/index/hotballon_g.svg";
import hotballonR from "../assets/images/index/hotballon_r.svg";

export default function DestinationsSection({block}) {
  if (!block) return null;

const baseUrl = "https://jgdev.jgallop.com/funjatrip/images/";

const bgImageUrl = block.blockPhotoPath && block.blockPhotoName
  ? `${baseUrl}${block.blockPhotoPath}/${block.blockPhotoName}`
  : "";



   const area1 = block.areaList[0];
  const area2 = block.areaList[1];
  const area3 = block.areaList[2];
  const area4 = block.areaList[3];
  const area5 = block.areaList[3];
  const area6 = block.areaList[4];
  const area7 = block.areaList[5];
  const area8 = block.areaList[6]


  const [currentIndex, setCurrentIndex] = useState(0);

  const containerWidth = 1280; // 單組寬度

  // 切換按鈕點擊事件，改成對應索引
  const handleSwitch = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-8 ">
      <div className=" py-8 flex flex-col items-center justify-center space-y-3">
        <h2 className="text-4xl font-medium">{block.mainTitle}</h2>
        <p>{block.subTitle}</p>
      </div>

      <div
        className="w-[1280px] h-[560px]  mx-auto overflow-hidden"
        style={{
          backgroundImage:
           `url('${bgImageUrl}')`,
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
              areaData={area1}
            />
            <DestinationsButton
              iconHotballon01={hotballonY}
              iconHotballon02={hotballonG}
              iconHotballon03={hotballonR}
              HotballonStyle="2"
              buttonStyle="up"
              areaData={area2}
            />
            <DestinationsButton
              iconHotballon01={hotballonR}
              iconHotballon02={hotballonY}
              HotballonStyle="3"
              buttonStyle="down"
              areaData={area3}
            />
            <DestinationsButton
              iconHotballon01={hotballonG}
              iconHotballon02={hotballonR}
              iconHotballon03={hotballonY}
              HotballonStyle="4"
              buttonStyle="up"
              areaData={area4}
            />
          </div>

          <div className="w-[1280px]  h-full flex justify-center items-center">
            <DestinationsButton
              iconHotballon01={hotballonY}
              iconHotballon02={hotballonG}
              iconHotballon03={hotballonR}
              HotballonStyle="1"
              buttonStyle="down"
              areaData={area5}
            />
            <DestinationsButton
              iconHotballon01={hotballonY}
              iconHotballon02={hotballonG}
              iconHotballon03={hotballonR}
              HotballonStyle="2"
              buttonStyle="up"
              areaData={area6}
            />
            <DestinationsButton
              iconHotballon01={hotballonR}
              iconHotballon02={hotballonY}
              HotballonStyle="3"
              buttonStyle="down"
              areaData={area7}
            />
            <DestinationsButton
              iconHotballon01={hotballonG}
              iconHotballon02={hotballonR}
              iconHotballon03={hotballonY}
              HotballonStyle="4"
              buttonStyle="up"
              areaData={area8}
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
