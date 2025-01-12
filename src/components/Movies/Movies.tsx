import { Movie } from "../../types/movie";
import "./Movies.css";

interface Props {
  movies: Movie[];
}

const ListOfMovies: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-year">{movie.year}</p>
          <img className="movie-img" src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResults = () => {
  return <p>No movies were found for this search</p>;
};

export const Movies: React.FC<Props> = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
