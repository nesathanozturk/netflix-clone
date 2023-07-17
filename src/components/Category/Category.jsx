import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import Movie from "../Movie/Movie";
import { movies } from "../../data/";
import { settings } from "../../data/settings";
import "../../sass/layout/_category.scss";

function Category({ title }) {
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
