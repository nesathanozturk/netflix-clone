import { movies } from "../../assets/data/data";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import "../../styles/movies.scss";
import MovieDetail from "../MovieDetail/MovieDetail";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <ArrowForwardIosOutlinedIcon />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <ArrowBackIosOutlinedIcon />
      </button>
    </div>
  );
};

function Movies({ title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <main>
      <section>
        <CategoryTitle title={title} />
        <div className="wrapper">
          <Slider {...settings}>
            {movies.map((movie, id) => (
              <div key={movie.id} className="container">
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
          </Slider>
        </div>
      </section>
    </main>
  );
}

export default Movies;
