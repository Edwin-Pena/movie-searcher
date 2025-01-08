import "bootstrap-icons/font/bootstrap-icons.css";
import BackgroundMovie from "./components/BackgroundMovie/BackgroundMovie";

import SearchBar from "./components/SearchBar/SearchBar";
import StaticMovies from "./components/StaticMovies/StaticMovies";

const App: React.FC = () => {
  return (
    <div className="page">
      <SearchBar />
      <BackgroundMovie />

      <StaticMovies />
    </div>
  );
};

export default App;
