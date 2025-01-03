interface InfoMovie {
  imdbID: string;
  Title: string;
  Year?: string;
  Poster: string;
}

interface Props {
  movies: InfoMovie[];
}

const ListOfMovies: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <li className="movie" key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfMovies;
