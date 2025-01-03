import ListOfMovies from "./ListOfMovies";
import MoviesJson from "../../mocks/with-results.json";
import "./Movies.css";

const Movies: React.FC = () => {
  const movieInfo = MoviesJson.Search;
  return (
    <div className="movies">
      <ListOfMovies movies={movieInfo} />
    </div>
  );
};

export default Movies;
