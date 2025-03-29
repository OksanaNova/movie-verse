import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useLocation } from "react-router-dom";


function Favorites() {

    const location = useLocation();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('favorite')) || [];
        setFavorites(savedMovies);
    }, [location])

    return (
        <>
            <div>
                <p className="carousel-header"><b>Your</b> Favorites</p>    
                <button>Delete All</button>
            </div>

            <div className="search-result-container">
                {favorites.length > 0 ? (
                    favorites.map((element) => (
                        <MovieCard
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        vote={element.vote_average}
                        poster_path={element.poster_path}
                        fromFavorites={true}/>
                    ))
                )
            : (<p className="no-results">Nothing here yet!<br/> Start building your watchlist 🎬</p>)}

            </div>

        </>


    )
}

export default Favorites