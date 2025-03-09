import { BiError } from "react-icons/bi";
import { cn } from "../utils/helper";


const Error = ({ className = "h-screen", error }) => {
  return (
    <div
      className={cn(
        `relative dark:bg-black bg-mainColor top-0 left-0 w-screen flex justify-center items-center`,
        className
      )}
    >
      <div className="flex flex-row gap-2 items-end ">
        <BiError className="text-[#ff0000] text-[32px]" />
        <p className=" font-roboto dark:text-gray-300 text-gray-900">{error}</p>
      </div>
    </div>
  );
};

export default Error;
