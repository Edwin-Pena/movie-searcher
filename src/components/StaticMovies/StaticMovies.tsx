import MoviesJson from "../../mocks/with-results.json";
import ListStaticMovies from "./ListStaticMovies";
import "./StaticMovies.css";

const StaticMovies: React.FC = () => {
  const movieInfo = MoviesJson.Search;
  return (
    <div className="movies">
      <ListStaticMovies movies={movieInfo} />
    </div>
  );
};

export default StaticMovies;
