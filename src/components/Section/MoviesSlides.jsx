import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "../MovieCard";

const MoviesSlides = ({ movies, category }) => (
  <Swiper slidesPerView="auto" spaceBetween={15} className="mySwiper">
    {movies.map((movie) => {
      return (
        <SwiperSlide
          key={movie.id}
          className="flex mt-1 flex-col xs:gap-[14px] gap-2 max-w-[170px]  rounded-lg"
        >
          <MovieCard movie={movie} category={category} />
        </SwiperSlide>
      );
    })}
  </Swiper>
);

export default MoviesSlides;
