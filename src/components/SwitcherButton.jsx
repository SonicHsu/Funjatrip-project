export default function SwitcherButton({ active = false, onClick }) {
    return (
        <button onClick={onClick} className={`
        w-4 h-4 rounded-full cursor-pointer
        ${active ? "bg-red-400" : "bg-gray-300 hover:bg-gray-400"}
        transition-colors duration-300
      `}></button>
    )
}