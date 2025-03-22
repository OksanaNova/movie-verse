function MovieCard({title, vote, poster_path}) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
            <p>{title}</p>
            <p>{vote}</p>
        </div>
    )
}

export default MovieCard;