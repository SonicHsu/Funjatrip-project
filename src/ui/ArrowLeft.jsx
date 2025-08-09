import arrowL from "../assets/images/index/arrow_l.svg";

export default function ArrowLeft({onClick}) {
  return (
      <img src={arrowL} alt="arrowL" className="w-auto h-[40px] cursor-pointer" onClick={onClick}/>
  );
}
