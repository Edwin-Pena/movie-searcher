import { useRef } from "react";
import { Movie } from "../../types/movie";

interface Props {
  movies: Movie[];
}

const ListStaticMovies: React.FC<Props> = ({ movies }) => {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.firstElementChild?.getBoundingClientRect().width ||
        0;
      carouselRef.current.scrollBy({
        left: -itemWidth * 4,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.firstElementChild?.getBoundingClientRect().width ||
        0;
      carouselRef.current.scrollBy({
        left: itemWidth * 4,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button className="carousel-btn left" onClick={scrollLeft}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <ul className="static-movies-list" ref={carouselRef}>
        {movies.map((movie) => (
          <li className="static-movie" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
      <button className="carousel-btn right" onClick={scrollRight}>
        <i className="bi bi-chevron-right"></i>
      </button>
    </>
  );
};

export default ListStaticMovies;
