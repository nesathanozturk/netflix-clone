import { movies } from "../../assets/data/data";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import "../../styles/category.scss";
import Movie from "../Movie/Movie";
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

function Category({ title }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main>
      <section>
        <CategoryTitle title={title} />
        <div className="wrapper">
          <Slider {...settings}>
            {movies.map((movie, id) => (
              <div key={movie.id} className="container">
                <Movie
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

export default Category;
