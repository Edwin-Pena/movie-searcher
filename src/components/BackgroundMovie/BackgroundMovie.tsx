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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nisi
          laborum ipsa nam delectus qui ab nostrum debitis incidunt rerum
          corporis dolores minima facere, optio necessitatibus numquam aperiam
          quasi quaerat!
        </p>
      </div>
    </div>
  );
};

export default BackgroundMovie;
