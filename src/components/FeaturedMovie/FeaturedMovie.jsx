import "../../styles/featuredMovie.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function FeaturedMovie({ type }) {
  return (
    <div className="featuredMovie">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="Background Poster"
      />
      <div className="movieInfo">
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
            <PlayArrowIcon /> <span>Play</span>
          </button>
          <button className="moreBtn">
            <InfoOutlinedIcon /> <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMovie;
