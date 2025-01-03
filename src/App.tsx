import SearchBar from "./assets/components/SearchBar/SearchBar";

const App: React.FC = () => {
  return (
    <div className="page">
      <SearchBar />
      {/* here goes the component background-movie */}

      <div className="movie-bg">
        <h1 className="movie-bg-title">RAYA AND THE LAST DRAGON</h1>
        <p className="movie-bg-desc">Short movie description</p>
      </div>

      {/* list of movies */}
    </div>
  );
};

export default App;
