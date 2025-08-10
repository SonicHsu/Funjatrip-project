export default function SchoolButton({ photoUrl, onClick, schoolName, isActive }) {
    return(
        <button  onClick={onClick} className="w-[268px] h-full cursor-pointer relative">
          <img
            src={photoUrl}
            alt="thumb"
            className={`w-full h-full object-cover ${isActive ? 'brightness-100' : 'brightness-50'}`}
            draggable={false} 
          />

          <p className="absolute inset-0 flex flex-col items-center justify-center text-white">{schoolName}</p>



        </button>
    )
}