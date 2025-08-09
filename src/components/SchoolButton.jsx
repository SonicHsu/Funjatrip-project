export default function SchoolButton({ photoUrl, onClick, schoolName }) {
    return(
        <button  onClick={onClick} className="w-[268px] h-full cursor-pointer relative">
          <img
            src={photoUrl}
            alt="thumb"
            className="w-full h-full object-cover brightness-50"
            draggable={false} 
          />

          <p className="absolute inset-0 flex flex-col items-center justify-center text-white">{schoolName}</p>



        </button>
    )
}