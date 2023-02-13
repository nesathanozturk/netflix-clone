import { useState, useRef } from "react";
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
        <ArrowBackIosOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <MovieDetail index={0} />
          <MovieDetail index={1} />
          <MovieDetail index={2} />
          <MovieDetail index={3} />
          <MovieDetail index={4} />
          <MovieDetail index={5} />
          <MovieDetail index={6} />
          <MovieDetail index={7} />
          <MovieDetail index={8} />
          <MovieDetail index={9} />
          <MovieDetail index={10} />
          <MovieDetail index={11} />
          <MovieDetail index={12} />
          <MovieDetail index={13} />
          <MovieDetail index={14} />
          <MovieDetail index={15} />
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </section>
  );
}

export default Movies;
