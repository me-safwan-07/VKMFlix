import { memo } from "react";
// eslint-disable-next-line no-unused-vars
import { m } from "framer-motion";

import Image from "../components/Image";
import { cn } from "../utils/helper";
import { useMotion } from "../hooks/useMotion";


const Poster = ({ posterPath, title, className }) => {
  const { zoomIn } = useMotion();
  return (
    <div className={cn(`md:block hidden `, className)}>
      <m.div
        variants={zoomIn(0.6, 0.8)}
        initial="hidden"
        animate="show"
        className="h-[380px] w-[254px]"
      >
        <Image
          width={254}
          height={380}
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt={title}
          className="object-cover rounded-xl  shadow-lg"
        />
      </m.div>
    </div>
  );
};

export default memo(Poster);
