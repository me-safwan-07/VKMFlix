import { Link } from "react-router-dom";
import { FaGem, FaYoutube } from "react-icons/fa";

import { useMediaQuery } from "usehooks-ts";
import Image from "../components/Image";

const MovieCard = ({
  movie,
  category,
  isPremium = false,
}) => {
  const { poster_path, original_title: title, name, id } = movie;
  const isMobile = useMediaQuery("(max-width: 380px)");
  return (
    <>
      <Link
        to={`/${category}/${id}`}
        className="dark:bg-[#1f1f1f] bg-[#f5f5f5] rounded-lg relative group w-[170px] select-none xs:h-[250px] h-[216px] overflow-hidden"
      >
        <Image
          height={!isMobile ? 250 : 216}
          width={170}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={movie.original_title}
          className=" object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out"
          effect="zoomIn"
        />
        {isPremium && (
          <div className="absolute top-2 right-2 bg-white dark:bg-black rounded-full p-1 shadow-md z-10">
            <FaGem className="text-yellow-400 text-[16px]" />
          </div>
        )}


        
      </Link>

      <h4 className="dark:text-gray-300 text-center cursor-default sm:text-base xs:text-[14.75px] text-[14px] font-medium ">
        {(title?.length > 50 ? title.split(":")[0] : title) || name}
        
      </h4>
    </>
  );
};

export default MovieCard
