
export default function ExploreButton({iconImage}) {
  return (
    <button className="w-[540px] h-[86px] bg-amber-400 hover:bg-[#e2b325] transition-colors duration-300 rounded-full flex p-1 items-center relative cursor-pointer">
      <div className="h-full aspect-square rounded-full bg-white flex items-center justify-center pb-1">
                  <img
                    src={iconImage} 
                    alt="iconImage"
                    className="w-[50px] h-auto"
                  />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col">
        <span className="text-[28px] text-white font-medium">我想自由行</span>
        <span>只想專心參加國際學校課程</span>
      </div>
    </button>
  );
}
