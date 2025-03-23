function MovieCard({title, vote, poster_path}) {
    return (
        <div className="container-movie-card">
            <div className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
               <p>{title}</p>
              <p>{vote.toFixed(1)}</p>
            </div>
        </div>
    )
}

export default MovieCard;