import BackgroundMovie from "./components/BackgroundMovie/BackgroundMovie";
import SearchBar from "./components/SearchBar/SearchBar";

const App: React.FC = () => {
  return (
    <div className="page">
      <SearchBar />
      <BackgroundMovie />

      {/* list of movies */}
    </div>
  );
};

export default App;
