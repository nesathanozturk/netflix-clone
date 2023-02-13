import { useState } from "react";
import "../../styles/movieDetail.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function MovieDetail({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="movie_box"
      style={{ left: isHovered && index * 225 - 10 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt="Movie Poster"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="movie_info">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOffAltIcon className="icon" />
              <ThumbDownOffAltIcon className="icon" />
            </div>
            <div className="movie_details">
              <span>1 hour 14 minutes</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              nihil quod maxime pariatur reiciendis sed perspiciatis beatae rem
              et, quo earum porro itaque dolor tempore ad veritatis amet
              officiis vero?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
