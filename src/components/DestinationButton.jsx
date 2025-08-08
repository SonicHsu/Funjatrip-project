export default function DestinationsButton({
  iconHotballon01,
  iconHotballon02,
  iconHotballon03,
  HotballonStyle,
  buttonStyle,
}) {
  const alignmentClass =
    buttonStyle === "up"
      ? "items-center transform -translate-y-10" // 往上推 40px (1rem = 4px, 10*4=40px)
      : "items-end";

  return (
    <div className={`w-[288px] h-full  flex justify-center py-2 ${alignmentClass}` }>
      <button className="w-[250px] h-[250px]  rounded-full flex items-center relative cursor-pointer">
        <img
          src="https://jgdev.jgallop.com/funjatrip/images/frontpage/america.jpg"
          alt="美國"
          className="w-full h-full object-cover rounded-full brightness-40"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white  text-3xl font-medium">
          美國
        </span>

        <div className="absolute -translate-x-1/2  left-1/2 bottom-full translate-y-[50%] z-10">
          <img
            src={iconHotballon01}
            alt="iconHotballon01"
            className="w-[72px] h-auto"
          />
          <div className="absolute inset-0 flex flex-col items-centerr justify-start text-white text-base mt-2">
            <span className="text-4xl font-bold">13</span>
            <span>課程</span>
          </div>
        </div>

        {HotballonStyle === "1" && (
          <div>
            <img
              src={iconHotballon02}
              alt="iconHotballon02"
              className="w-[35px] h-auto absolute -translate-x-1/2 bottom-full left-[70%]  translate-y-[50%]"
            />

            <img
              src={iconHotballon03}
              alt="iconHotballon03"
              className="w-[22px] h-auto absolute right-[-5%] top-[30%] -translate-y-1/2"
            />
          </div>
        )}

        {HotballonStyle === "2" && (
          <div>
            <img
              src={iconHotballon02}
              alt="iconHotballon02"
              className="w-[30px] h-auto absolute  right-[15%] top-[10%]  -translate-y-1/2"
            />

            <img
              src={iconHotballon03}
              alt="iconHotballon03"
              className="w-[20px] h-auto absolute left-[15%] top-[10%] -translate-y-1/2"
            />
          </div>
        )}

        {HotballonStyle === "3" && (
          <div>
            <img
              src={iconHotballon02}
              alt="iconHotballon02"
              className="w-[30px] h-auto absolute  right-[15%] top-[10%]  -translate-y-1/2"
            />
          </div>
        )}

        {HotballonStyle === "4" && (
          <div>
            <img
              src={iconHotballon02}
              alt="iconHotballon02"
              className="w-[35px] h-auto absolute  left-[10%] top-[0%]  -translate-y-1/2"
            />

            <img
              src={iconHotballon03}
              alt="iconHotballon03"
              className="w-[22px] h-auto absolute right-[10%] top-[-30%] -translate-y-1/2"
            />
          </div>
        )}
      </button>
    </div>
  );
}
