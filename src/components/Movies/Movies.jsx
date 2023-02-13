import { useState, useRef } from "react";
import { movies } from "../../assets/data/data";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import "../../styles/movies.scss";
import MovieDetail from "../MovieDetail/MovieDetail";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function Movies({ title }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 9) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <section>
      <CategoryTitle title={title} />
      <div className="wrapper">
        {/* <ArrowBackIosOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        /> */}
        {movies.map((movie, id) => (
          <div key={movie.id} className="container" ref={listRef}>
            <MovieDetail
              title={movie.title}
              smallPoster={movie.smallPoster}
              description={movie.description}
              minute={movie.minute}
              limit={movie.limit}
              year={movie.year}
              genre={movie.genre}
            />
          </div>
        ))}
        {/* <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        /> */}
      </div>
    </section>
  );
}

export default Movies;
