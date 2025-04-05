import { Link } from "react-router-dom";
import './MovieCard.css'

function MovieCard({title, vote, poster_path, id, searchResults, userSearch, fromFavorites, setFavorites}) {

    const removeFromFavorites = (e) => {
        e.preventDefault();
        const savedMovies = JSON.parse(localStorage.getItem('favorite')) || [];
        const updatedMovies = savedMovies.filter(movie => movie.id !== id);
        setFavorites(updatedMovies);
        localStorage.setItem('favorite', JSON.stringify(updatedMovies))
    }

    return (

        <Link 
            to={`/movie/${id}`} 
            state={{ searchResults, userSearch, fromFavorites }}
            className="movie-card">

            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />

            {fromFavorites && (
                <button onClick={removeFromFavorites} className="remove-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="trash-icon">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6l-1 14H6L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2"></path>
                        </svg>
                </button>
            )}

            <div className="movie-info">
                <h3>{title}</h3>
                <p>⭐ {vote.toFixed(1)}</p>
            </div>
        </Link>
    )
}

export default MovieCard;