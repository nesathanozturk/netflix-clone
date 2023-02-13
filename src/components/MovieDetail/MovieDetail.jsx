import "../../styles/movieDetail.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function MovieDetail({
  index,
  title,
  titlePoster,
  bigPoster,
  smallPoster,
  description,
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
          <PlayArrowIcon className="icon" />
          <AddIcon className="icon" />
          <ThumbUpOffAltIcon className="icon" />
          <ThumbDownOffAltIcon className="icon" />
        </div>
        <div className="movie_details">
          <span>{minute}</span>
          <span className="limit">{limit}</span>
          <span>{year}</span>
        </div>
        <div className="description">{description}</div>
        <div className="genre">{genre}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
