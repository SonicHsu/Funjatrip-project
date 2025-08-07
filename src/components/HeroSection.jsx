import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section>
      <div
        className="flex justify-center"
        style={{
          backgroundImage:
            "url('https://jgdev.jgallop.com/funjatrip/images/frontpage/blocks/201901011000412790.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="h-full  flex flex-col items-center justify-center space-y-2">
          <h1
            className="text-5xl text-white font-bold"
            style={{ textShadow: "2px 2px  rgba(0,0,0,0.5)" }}
          >
            放假，給孩子一個有趣的假期
          </h1>
          <div className="w-[540px] h-[60px]">
            <SearchBar />
          </div>
        </div>

        
      </div>

      <div className="bg-amber-500 h-[148px] w-full"></div>
    </section>
  );
}
