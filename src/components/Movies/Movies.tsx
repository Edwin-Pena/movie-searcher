type InfoMovie = {
  id: string;
  title: string;
  year: string;
  poster: string;
};

type ListOfMoviesProps = {
  movies: InfoMovie[];
};

type MoviesProps = {
  movies: InfoMovie[];
};

const ListOfMovies: React.FC<ListOfMoviesProps> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResults = () => {
  return <p>No movies were found for this search</p>;
};

export const Movies: React.FC<MoviesProps> = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
