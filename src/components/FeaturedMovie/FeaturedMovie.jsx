import "../../styles/featuredMovie.scss";
import { movies } from "../../assets/data/data";
import FeaturedMovieDetail from "../FeaturedMovieDetail/FeaturedMovieDetail";

function FeaturedMovie() {
  return (
    <div className="featured_movie">
      <img src={movies[0].bigPoster} alt="Background Poster" />
      <FeaturedMovieDetail movies={movies} />
    </div>
  );
}

export default FeaturedMovie;
