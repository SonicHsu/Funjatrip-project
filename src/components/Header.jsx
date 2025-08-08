import { useState } from "react";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

import navLogo from "../assets/images/index/nav_Logo.svg";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-md">
      <nav className=" mx-auto  h-20 flex items-center w-[80%] ">
        {/* Logo */}
        <div className="flex items-center space-x-4 w-[50%]">
          <img src={navLogo} alt="FunjaTrip Logo" className="h-[60px] w-auto" />

          <div className="flex-1 px-6 h-12">
            <SearchBar />
          </div>
        </div>

        <ul className="ml-auto flex  text-gray-700 font-medium">
          <div className="pr-4">
            <NavButton
              text="人民幣CNY"
              className="w-[90px]"
              isSelect
              id="currency"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              options={["人民幣CNY", "美金USD", "新台幣NT"]}
            />
          </div>

          <div className="pr-4">
            <NavButton
              text="繁體中文"
              className="w-[65px]"
              isSelect
              id="language"
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              options={["簡體中文", "繁體中文"]}
            />
          </div>

          <NavButton text="幫助" className="w-[65px]" isSelect={false} />
          <NavButton text="註冊" className="w-[65px]" isSelect={false} />
          <NavButton text="登錄" className="w-[65px]" isSelect={false} />
        </ul>
      </nav>
    </header>
  );
}
