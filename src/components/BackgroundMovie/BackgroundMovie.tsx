import Backdrop from "../../../public/images/mufasa-background.jpg";
import "./BackgroundMovie.css";

const BackgroundMovie: React.FC = () => {
  return (
    <div className="backdrop">
      <div className="backdrop-gradient"></div>
      <img src={Backdrop} alt="backdrop" className="backdrop-img" />
      <div className="movie-bg">
        <h1 className="movie-bg-title">Mufasa: The Lion King </h1>
        <p className="movie-bg-desc">
          Lost and alone, orphaned cub Mufasa meets a sympathetic lion named
          Taka, the heir to a royal bloodline. The chance meeting sets in motion
          an expansive journey of an extraordinary group of misfits searching
          for their destinies.
        </p>
      </div>
    </div>
  );
};

export default BackgroundMovie;
