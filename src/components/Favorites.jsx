import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useLocation } from "react-router-dom";
import heart from '../assets/Favorites.png'

function Favorites() {

    const location = useLocation();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('favorite')) || [];
        setFavorites(savedMovies);
    }, [location])

    const deleteAllMovies = () => {
        localStorage.removeItem('favorite');
        setFavorites([])
    }

    if(favorites.length === 0) return <p className="no-results fav"><img src={heart} alt="heart"/><br/>Nothing here yet!<br/>Start building your watchlist 🎬</p>

    return (
        <>
            <div className="favorites-header">
                <p className="carousel-header"><b>Your</b> Favorites</p>    
                <button onClick={deleteAllMovies}>Delete All</button>
            </div>

            <div className="search-result-container" >
                {favorites.map((element) => (
                        <MovieCard
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        vote={element.vote_average}
                        poster_path={element.poster_path}
                        fromFavorites={true}
                        setFavorites={setFavorites}/>                    
                    ))
                }
            </div>
        </>
    )
}

export default Favorites