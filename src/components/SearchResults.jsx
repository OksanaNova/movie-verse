import MovieCard from "./MovieCard";

function SearchResults({searchResults}) {
    return (
        <div>

            {searchResults.map(element => (
                <MovieCard 
                key={element.id}
                title={element.title}
                vote={element.vote_average}
                poster_path={element.poster_path}/>
            ))}


            {/* {searchResults.map(element => {
                const {title, vote_average, id, poster_path} = element;
                return (
                    <div key={id}>
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>
                        <p>{title}</p>
                        <p>{vote_average}</p>
                    </div>
                )
            })} */}
        </div>
    )
}

export default SearchResults;