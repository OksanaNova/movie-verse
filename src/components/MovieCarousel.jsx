import Slider from "react-slick";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoviesCarousel.css";

function MoviesCarousel( {movies} ) {

    const settings = {
        infinite: true, 
        speed: 800, 
        slidesToShow: 5, 
        slidesToScroll: 2, 
        arrows: true, 
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
        ]
      };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {movies.map((element) => (
                    <MovieCard 
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    vote={element.vote_average}
                    poster_path={element.poster_path}/>
                ))}
            </Slider>
        </div>
    )
}

export default MoviesCarousel;