
export default function ExploreButton({icon, title, subtitle}) {
  return (
    <button className="w-[540px] h-[86px] bg-amber-400 hover:bg-[#e2b325] transition-colors duration-300 rounded-full flex p-1 items-center relative cursor-pointer">
      <div className="h-full aspect-square rounded-full bg-white flex items-center justify-center pb-1">
                  <img
                    src={icon} 
                    alt="icon"
                    className="w-[50px] h-auto"
                  />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col w-full space-y-1">
        <span className="text-[28px] text-white font-medium" style={{ lineHeight: '1.0' }}>{title}</span>
        <span className="w-full text-gray-700" >{subtitle}</span>
      </div>
    </button>
  );
}
