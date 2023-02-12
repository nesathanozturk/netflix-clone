import "../../styles/featuredMovie.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function FeaturedMovie() {
  return (
    <div className="featured_movie">
      <img
        src="https://www.teahub.io/photos/full/60-609425_peaky-blinders-wallpapers-group-peaky-blinders-wallpaper-4k.jpg"
        alt="Background Poster"
      />
      <div className="movie_info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="Movie Poster"
        />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          beatae, provident modi doloremque corrupti vitae officia eos
          voluptatibus libero temporibus vel consequuntur tenetur, quaerat iusto
          consectetur atque ea soluta consequatur.
        </span>
        <div className="buttons">
          <button className="playBtn">
            <PlayArrowIcon /> <span>Oynat</span>
          </button>
          <button className="moreBtn">
            <InfoOutlinedIcon /> <span>Daha Fazla Bilgi</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMovie;
