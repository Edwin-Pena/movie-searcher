import "bootstrap-icons/font/bootstrap-icons.css";
import BackgroundMovie from "./components/BackgroundMovie/BackgroundMovie";
import SearchBar from "./components/SearchBar/SearchBar";
import StaticMovies from "./components/StaticMovies/StaticMovies";
import { useCallback, useState } from "react";
import { Movies } from "./components/Movies/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const { movies, getMovies, loading } = useMovies({ search });

  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      console.log("search", search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSearchChange = (e: string): void => {
    setSearch(e);
    debouncedGetMovies(e);
  };

  return (
    <div className="page">
      <SearchBar value={search} onChange={handleSearchChange} />
      {
        loading ? (
          <p className="loading-message">Loading movies...</p>
        ) : search.trim() === "" ? (
          <>
            <BackgroundMovie />
            <StaticMovies />
          </>
        ) : (
          /* movies.length > 0 ? ( */
          <Movies movies={movies} />
        )
        /* ) : (
        <p>No movies found</p>
      ) */
      }
    </div>
  );
};

export default App;
