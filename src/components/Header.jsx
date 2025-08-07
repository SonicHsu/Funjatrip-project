import React from "react";
import navLogo from "../assets/images/index/nav_Logo.svg";
import iconSearch from "../assets/images/index/icon_search.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className=" mx-auto  h-20 flex items-center w-[80%] ">
        {/* Logo */}
        <div className="flex items-center space-x-4 w-[50%]">
          <img
            src={navLogo} // 若用 public 資料夾圖片
            alt="FunjaTrip Logo"
            className="h-[60px] w-auto"
          />

          <div className="flex-1 px-6">
            <div className="w-full h-12  rounded-full border border-gray-300 flex items-center justify-between px-1">
              <input className="pl-4  outline-none w-[80%]" />
              <button className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center cursor-pointer">
                <img
                  src={iconSearch}
                  alt="iconSearch"
                  className="h-[20px] w-auto"
                />
              </button>
            </div>
          </div>
        </div>

        {/* 導覽連結（桌機版） */}
        <ul className="ml-auto flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-500">
              首頁
            </a>
          </li>
          <li>
            <a href="#destinations" className="hover:text-blue-500">
              遊學國家
            </a>
          </li>
          <li>
            <a href="#schools" className="hover:text-blue-500">
              名校推薦
            </a>
          </li>
          <li>
            <a href="#popular-tours" className="hover:text-blue-500">
              熱門行程
            </a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-blue-500">
              關於我們
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
