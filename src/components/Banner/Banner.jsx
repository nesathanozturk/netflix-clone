import BannerDetail from "../BannerDetail/BannerDetail";
import { movies } from "../../assets/data/data";
import "../../styles/banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src={movies[0].bigPoster} alt="Background Poster" />
      <BannerDetail movies={movies} />
    </div>
  );
}

export default Banner;
