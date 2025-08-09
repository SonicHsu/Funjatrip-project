import arrowR from "../assets/images/index/arrow_r.svg";

export default function ArrowLeft({onClick}) {
  return (

      <img src={arrowR} alt="arrowR" className="w-auto h-[40px] cursor-pointer"  onClick={onClick}/>

  );
}
