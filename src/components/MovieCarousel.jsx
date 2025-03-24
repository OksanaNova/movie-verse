import Slider from "react-slick";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoviesCarousel.css";

function MoviesCarousel( {trendingMovies} ) {

    const settings = {
        infinite: true, 
        speed: 800, 
        slidesToShow: 5, 
        slidesToScroll: 2, 
        arrows: true, 
        responsive: [
          { breakpoint: 1800, settings: { slidesToShow: 7, slidesToScroll: 2 } },
          { breakpoint: 1500, settings: { slidesToShow: 5, slidesToScroll: 2 } },
          { breakpoint: 1100, settings: { slidesToShow: 4, slidesToScroll: 2 } },
          { breakpoint: 880, settings: { slidesToShow: 3, slidesToScroll: 1 } },
          { breakpoint: 670, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 450, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
      };

    return (
        <div className="carousel-container">

            <Slider {...settings}>
                {trendingMovies.map((element) => (
                    <MovieCard 
                    key={element.id}
                    title={element.title}
                    vote={element.vote_average}
                    poster_path={element.poster_path}/>
                ))}

            </Slider>

        </div>
    )
}

export default MoviesCarousel;