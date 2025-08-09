import SchoolCarousel from "./SchoolCarousel";

export default function SchoolsSection({ block }) {
  if (!block) return null;

  const schoolData = block.schoolList

  return (
    <section className="mt-16">
      <div
        className="flex flex-col items-center justify-center h-[880px]"
        style={{
          backgroundImage:
            "url('https://jgdev.jgallop.com/funjatrip/images/frontpage/blocks/20190406090638490.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" py-8 flex flex-col items-center justify-center text-white space-y-3">
          <h2 className="text-4xl font-medium">{block.mainTitle}</h2>
          <p>{block.subTitle}</p>
        </div>

        <SchoolCarousel schoolData={schoolData}/>
      </div>
    </section>
  );
}
