import BackgroundMovie from "./components/BackgroundMovie/BackgroundMovie";
import Movies from "./components/Movies/Movies";
import SearchBar from "./components/SearchBar/SearchBar";

const App: React.FC = () => {
  return (
    <div className="page">
      <SearchBar />
      <BackgroundMovie />

      <Movies />
    </div>
  );
};

export default App;
