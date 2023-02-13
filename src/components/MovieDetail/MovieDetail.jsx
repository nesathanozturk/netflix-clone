import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="movie_box"
      style={{ left: isHovered && index * 225 - 10 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <video src={trailer} autoPlay={true} loop></video> */}
      <img src={smallPoster} alt={title} key={index} />
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
