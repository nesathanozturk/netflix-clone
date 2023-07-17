import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import SampleNextArrow from "../buttons/SampleNextArrow";
import SamplePrevArrow from "../buttons/SamplePrevArrow";
import Movie from "../Movie/Movie";
import { movies } from "../../data/";
import "../../sass/layout/_category.scss";

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
    <section>
      <CategoryTitle title={title} />
      <div className="category">
        <Slider {...settings}>
          {movies.map((movie, id) => (
            <div key={movie.id} className="movie_container">
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
  );
}

export default Category;
