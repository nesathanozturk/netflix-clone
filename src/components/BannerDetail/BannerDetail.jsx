import "../../styles/banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function BannerDetail({ movies }) {
  return (
    <div className="movie_info">
      <img src={movies[0].titlePoster} alt={movies[0].title} />
      <span className="description">{movies[0].description}</span>
      <div className="buttons">
        <button className="playBtn">
          <PlayArrowIcon className="icon" /> <span>Oynat</span>
        </button>
        <button className="moreBtn">
          <InfoOutlinedIcon className="icon" /> <span>Daha Fazla Bilgi</span>
        </button>
      </div>
    </div>
  );
}

export default BannerDetail;
