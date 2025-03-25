import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function MovieDetails() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [myMovieDetails, setMyMovieDetails] = useState(null);

    const MY_KEY = "c6b908d5b1167252cde35a2286356a40";

    useEffect(() => {
        const getMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MY_KEY}`);
            const data = await response.json();
            setMyMovieDetails(data)
            console.log(data)
        }
        getMovieDetails()
    }, [id])

    if(!myMovieDetails) return <p>Loading..</p>

    return (
        <div className='movie-details'>

            <div>
                <img src={`https://image.tmdb.org/t/p/w500${myMovieDetails.poster_path}`} alt={myMovieDetails.title} />
            </div>

            <div>
                <h1>{myMovieDetails.title}</h1>

                <div>
                    <p>{myMovieDetails.release_date}</p>
                    <p>{myMovieDetails.genres.map((item) => item.name).join(", ")}</p>
                    <p>⭐{myMovieDetails.vote_average.toFixed(1)}</p>
                </div>

                <div>
                    <h2>Plot</h2>
                    <p>{myMovieDetails.overview}</p>
                    <p><b>Made in:</b> {myMovieDetails.production_countries.map(item => item.name).join(", ")}</p>

                </div>



            </div>
        </div>
    )
}

export default MovieDetails