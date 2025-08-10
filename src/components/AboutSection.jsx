export default function AboutSection({block}) {

  if (!block) return null;

  const baseUrl = "https://jgdev.jgallop.com/funjatrip/images/";

  const bgImageUrl =
    block.blockPhotoPath && block.blockPhotoName
      ? `${baseUrl}${block.blockPhotoPath}/${block.blockPhotoName}`
      : "";


  return (
    <section className="mt-20">
      <div
        className=" h-[560px]  mx-auto overflow-hidden"
        style={{
          backgroundImage:
            `url('${bgImageUrl}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <h2 className="text-4xl font-bold">{block.mainTitle}</h2>
          <p className="text-xl max-w-[1200px] text-center leading-loose font-normal">{block.subTitle}</p>
          <button className="w-[240px] h-[50px] rounded-full bg-white text-xl text-gray-700 hover:text-blue-700 cursor-pointer">{block.buttonTitle}</button>
        </div>
      </div>
    </section>
  );
}
