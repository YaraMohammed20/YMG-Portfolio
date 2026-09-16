import error from "../../assets/5.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4  ">
      <img src={error} alt="Not Found Image"className="w-full max-w-md"/>
    </div>
  );
}