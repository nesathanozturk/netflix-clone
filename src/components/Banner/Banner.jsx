import { useEffect } from "react";
import BannerDetail from "../BannerDetail/BannerDetail";
import { movies } from "../../data";
import trailer from "../../assets/peaky-blinders-trailer.mp4";
import "../../sass/layout/_banner.scss";

function Banner() {
  useEffect(() => {
    const handlePlayPause = () => {
      const video = document.getElementById("video");
      const serieBanner = document.getElementById("movie_info");

      if (video.paused) {
        video.play();
        serieBanner.style.opacity = "0.2";
      } else {
        video.pause();
        serieBanner.style.opacity = "1";
      }
    };
    handlePlayPause();
  }, []);

  return (
    <div className="banner">
      <video
        id="video"
        className="banner-video"
        poster={movies[0].bigPoster}
        src={trailer}
        type="video/mp4"
        onClick={handlePlayPause}
        loop
      ></video>
      <BannerDetail movies={movies} />
    </div>
  );
}

export default Banner;
