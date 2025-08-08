export default function AboutSection() {
  return (
    <section className="mt-20">
      <div
        className=" h-[560px]  mx-auto overflow-hidden"
        style={{
          backgroundImage:
            "url('https://jgdev.jgallop.com/funjatrip/images/frontpage/blocks/201904060913348770.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <h2 className="text-4xl font-bold">關於放假趣</h2>
          <p className="text-xl max-w-[1200px] text-center leading-loose font-normal">每一天，我們都在協助您發掘全球最棒的遊學行程與體驗！ 放假趣將文化交流、語言學習與各項領域訓練統整結合，藉由多元的課程與項目，讓夢想和社交在國際化視野中開拓與實現。</p>
          <button className="w-[240px] h-[50px] rounded-full bg-white text-xl text-gray-700">現在就開始吧</button>
        </div>
      </div>
    </section>
  );
}
