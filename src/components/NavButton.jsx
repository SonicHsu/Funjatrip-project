import { useCallback, useEffect, useRef } from "react";

export default function NavButton({
  text,
  className = "",
  isSelect,
  id,
  activeDropdown,
  setActiveDropdown,
  options,
}) {
  const isOpen = isSelect && activeDropdown === id;
  const ref = useRef(null); // 參考本組件DOM

  const handleClick = useCallback(() => {
    if (!isSelect) return;
    setActiveDropdown(isOpen ? null : id);
  }, [isOpen, setActiveDropdown, id, isSelect]);

  // 監聽點擊事件，點外部關閉下拉
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isOpen) {
          setActiveDropdown(null);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setActiveDropdown]);

  return (
    <li ref={ref} className="flex items-center relative">
      <a
        href="#hero"
        onClick={handleClick}
        className={`hover:text-blue-500 flex flex-wrap h-[61px] ${className} items-center justify-center text-center px-4 py-2 relative`}
      >
        {text}
      </a>

      {isSelect && (
        <div className="absolute left-full -ml-3">
          <svg
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
            width="20"
            height="16"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 11L0.937822 0.5L13.0622 0.5L7 11Z" fill="#FF0000" />
          </svg>
        </div>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-[130px] bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center py-2 text-sm text-stone-500 font-normal px-2">
          {options.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-2 hover:bg-amber-400 w-full cursor-pointer rounded-full text-center"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
