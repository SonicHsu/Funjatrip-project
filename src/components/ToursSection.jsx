import TourCard from "./TourCard";
import SwitcherButton from "./SwitcherButton";

export default function ToursSection() {
  return (
    <section className="mt-20">
      <div className=" py-8 flex flex-col items-center justify-center space-y-3">
        <h2 className="text-4xl font-medium">熱門行程</h2>
        <p>找出您所愛的</p>
      </div>

      <div className="w-[1126px] h-auto mx-auto">
        <div className="flex justify-between">
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
        <div className="flex justify-between">
          <TourCard />
          <TourCard />
          <TourCard />
        </div>

        <div className="h-auto w-full bg-white flex items-center justify-center py-2 space-x-3">
          <SwitcherButton />
          <SwitcherButton />
          <SwitcherButton />
          <SwitcherButton />
          <SwitcherButton />
        </div>
      </div>
    </section>
  );
}
