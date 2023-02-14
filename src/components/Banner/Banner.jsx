import BannerDetail from "../BannerDetail/BannerDetail";
import { movies } from "../../assets/data/data";
import "../../styles/banner.scss";
import trailer from "../../assets/peaky-blinders-trailer.mp4";

const handlePlay = () => {
  const video = document.getElementById("video");
  video.play();
};

const handlePause = () => {
  const video = document.getElementById("video");

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

function Banner() {
  return (
    <div className="banner">
      <video
        id="video"
        className="banner-video"
        poster={movies[0].bigPoster}
        src={trailer}
        type="video/mp4"
        onClick={handlePause}
      ></video>
      <BannerDetail movies={movies} handlePlay={handlePlay} />
    </div>
  );
}

export default Banner;
