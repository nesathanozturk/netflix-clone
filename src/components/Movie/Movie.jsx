import "../../sass/components/_movie.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckIcon from "@mui/icons-material/Check";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";

function Movie({
  index,
  title,
  titlePoster,
  bigPoster,
  smallPoster,
  minute,
  limit,
  year,
  genre,
}) {
  return (
    <div className="movie_box">
      <img src={smallPoster} alt={title} />
      <div className="movie_info">
        <div className="icons">
          <div className="left_icons">
            <PlayArrowIcon className="icon" />
            <CheckIcon className="icon" />
          </div>
          <div className="right_icons">
            <ThumbDownOffAltIcon className="icon" />
            <ThumbUpOffAltIcon className="icon" />
            <ThumbsUpDownIcon className="icon" />
          </div>
        </div>
        <div className="movie_details">
          <span className="limit">{limit}</span>
          <span>{minute}</span>
        </div>
        <div className="genre">{genre}</div>
      </div>
    </div>
  );
}

export default Movie;
