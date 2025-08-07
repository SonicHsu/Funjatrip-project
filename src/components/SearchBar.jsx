import iconSearch from "../assets/images/index/icon_search.svg";

export default function SearchBar() {
  return (
    <div className="w-full h-full  rounded-full border bg-white border-gray-300 flex items-center justify-between p-1">
      <input className="pl-4  outline-none w-[80%]" />
      <button className="h-full aspect-square rounded-full  bg-amber-400  flex items-center justify-center cursor-pointer">
        <img src={iconSearch} alt="iconSearch" className="p-2.5 h-auto w-auto" />
      </button>
    </div>
  );
}
