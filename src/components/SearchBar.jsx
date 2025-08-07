import iconSearch from "../assets/images/index/icon_search.svg";

export default function SearchBar() {
  return (
    <div className="w-full h-12  rounded-full border border-gray-300 flex items-center justify-between px-1">
      <input className="pl-4  outline-none w-[80%]" />
      <button className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center cursor-pointer">
        <img src={iconSearch} alt="iconSearch" className="h-[20px] w-auto" />
      </button>
    </div>
  );
}
