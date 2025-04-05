import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import back from '../assets/back.png';
import LoaderPage from '../components/Loader/LoaderPage';
import Swal from 'sweetalert2';
import MoviesCarousel from '../components/MovieCarousel/MovieCarousel';

function MovieDetails() {

    const MY_KEY = "c6b908d5b1167252cde35a2286356a40";

    const navigate = useNavigate();
    const { id } = useParams();

    const [myMovieDetails, setMyMovieDetails] = useState(null);
    const [isMovieSaved, setIsMovieSaved] = useState(false);

    const [similarMovies, setSimilarMovies] = useState([]);

    const [stateLoader, setStateLoader] = useState(false);

    const [expanded, setExpanded] = useState(false);

    const location = useLocation();
    const { searchResults, userSearch, fromFavorites } = location.state || {};

    useEffect(() => {
        if(!id) return;

        const getMovieDetails = async () => {
            setStateLoader(true);
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MY_KEY}`);

            if(response.ok) {
                setStateLoader(false);
                const data = await response.json();
                setMyMovieDetails(data);

                const savedMovies = JSON.parse(localStorage.getItem('favorite')) || [];
                setIsMovieSaved(savedMovies.some(movie => movie.id === data.id));
            } else {
                setStateLoader(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        }; 

        const getSimilarMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${MY_KEY}`);
            const data = await response.json();
            setSimilarMovies(data.results);
        }; 

        getMovieDetails();
        getSimilarMovies();
    }, [id])

    const toggleOverview = () => {
        setExpanded(!expanded)
    }

    const addToFavorites = () => {
        const savedMovies = JSON.parse(localStorage.getItem('favorite')) || [];

        if(isMovieSaved) {
            const updatedMovies = savedMovies.filter(movie => movie.id !== myMovieDetails.id);
            localStorage.setItem('favorite', JSON.stringify(updatedMovies));
            setIsMovieSaved(false);
        } else {
            localStorage.setItem('favorite', JSON.stringify([...savedMovies, myMovieDetails]));
            setIsMovieSaved(true);
        }
    }

    const backPage = () => {
        if(fromFavorites) {
            navigate('/favorites')
        } else if (searchResults || userSearch) {
            navigate('/', { state: {searchResults, userSearch} })
        } else {
            navigate('/')
        }
    }

    if(stateLoader) return <LoaderPage />

    if(!myMovieDetails) return <p className='no-results'>Movie not found.</p>

    return (
        <>
            <div className='movie-details-container'>

                <button className='back' onClick={backPage}>
                    <img src={back} alt='back-arrow'/>
                </button>

                <div className='movie-details'>

                    <div className='movie-details-image'>
                        <img src={`https://image.tmdb.org/t/p/w500${myMovieDetails.poster_path}`} alt={myMovieDetails.title} />
                    </div>

                    <div className='movie-details-info'>
                        <h1>{myMovieDetails.title}</h1>

                        <div className='movie-details-about'>
                            <p className='release-date'>{myMovieDetails.release_date.split("-")[0]}</p>
                            <p className='genres'>{myMovieDetails.genres.map((item) => item.name).join(", ")}</p>
                            <p className='vote'>⭐{myMovieDetails.vote_average.toFixed(1)}</p>
                        </div>

                        <div className='description'>
                            <h2>Plot</h2>

                            <p>
                                {expanded ? myMovieDetails.overview : `${myMovieDetails.overview.slice(0, 150)}... `}
                                <button onClick={toggleOverview} className='toggle-button'>
                                    {expanded ? "Show less" : "Show more"}
                                </button>
                            </p>

                            <h2>Made in</h2>
                            <p>{myMovieDetails.production_countries.map(item => item.name).join(", ")}</p>
                        </div>
                    </div>
                </div>

                <button 
                onClick={addToFavorites} 
                className={`favorite-button ${isMovieSaved ? "saved" : "default"}`} >
                    <svg 
                        width="25" 
                        height="25" 
                        viewBox="0 0 24 24" 
                        fill={isMovieSaved ? "red" : "lightgrey"}
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>

            </div>

            {similarMovies.length > 0 && 
            <div>
                <p className="carousel-header"><b>You May</b> Also Like</p>
                <MoviesCarousel 
                movies={similarMovies}/>
            </div>}
        </>
    )
}

export default MovieDetails