import BannerDetail from "../BannerDetail/BannerDetail";
import { movies } from "../../assets/data/data";
import "../../styles/banner.scss";
import trailer from "../../assets/peaky-blinders-trailer.mp4";

function Banner() {
  return (
    <div className="banner">
      <video
        id="video"
        className="banner-video"
        poster={movies[0].bigPoster}
        src={trailer}
        type="video/mp4"
        controls
      ></video>
      <BannerDetail movies={movies} />
    </div>
  );
}

export default Banner;
