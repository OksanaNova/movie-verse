function MovieCard({title, vote, poster_path}) {

    return (

        <div className="movie-card">

            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />


            <div className="movie-info">
                <h3>{title}</h3>
                <p>⭐ {vote.toFixed(1)}</p>
            </div>

        </div>
    )
}

export default MovieCard;