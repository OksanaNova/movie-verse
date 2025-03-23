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



        </div>
    )
}

export default SearchResults;