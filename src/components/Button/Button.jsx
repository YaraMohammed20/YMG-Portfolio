import { FaArrowUp } from "react-icons/fa6";

export default function Button() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed
        bottom-4
        right-4
        z-50
        w-15 h-15
        rounded-full
        border border-gray-500
        bg-gray-500
        flex items-center justify-center
        text-gray-100
        shadow-lg
        hover:bg-gray-200
        hover:text-gray-800
        hover:border-gray-200
        hover:scale-105
        active:scale-95
        transition-all duration-500 ease-out
        animate-[float_3s_ease-in-out_infinite]
      "
    >
      <FaArrowUp className="transition-transform duration-500 ease-out hover:-translate-y-1" />
    </button>
  );
}