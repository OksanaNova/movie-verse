import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import back from '../assets/back.png';
import addButton from '../assets/addToList.png';
import LoaderPage from './LoaderPage';
import Swal from 'sweetalert2';

function MovieDetails() {

    const MY_KEY = "c6b908d5b1167252cde35a2286356a40";

    const navigate = useNavigate();
    const { id } = useParams();

    const [myMovieDetails, setMyMovieDetails] = useState(null);

    const [stateLoader, setStateLoader] = useState(false);

    const [expanded, setExpanded] = useState(false);

    const location = useLocation();
    const { searchResults, userSearch } = location.state || {};

    useEffect(() => {
        if(!id) return;

        const getMovieDetails = async () => {
            setStateLoader(true);
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MY_KEY}`);

            if(response.ok) {
                setStateLoader(false);
                const data = await response.json();
                setMyMovieDetails(data)
                // console.log(data)
            } else {
                setStateLoader(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
            }
        }
        getMovieDetails()
    }, [id])

    const toggleOverview = () => {
        setExpanded(!expanded)
    }

    if(stateLoader) return <LoaderPage />

    if(!myMovieDetails) return <p className='no-results'>Movie not found.</p>

    return (

        <>

            <div className='movie-details-container'>

                <button onClick={() => navigate("/", { state: {searchResults, userSearch} })} className='back'>
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

                <button className='addToList'>
                    <img src={addButton} alt='add-button'/>
                </button>

            </div>

        </>
    
    )
}

export default MovieDetails