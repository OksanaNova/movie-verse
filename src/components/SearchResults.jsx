import MovieCard from "./MovieCard";

function SearchResults({searchResults}) {

    return (

        <div className="search-result-container">
            
            {searchResults.length > 0 ? (
                searchResults.map((element) => (
                    <MovieCard 
                    key={element.id}
                    title={element.title}
                    vote={element.vote_average}
                    poster_path={element.poster_path}/>
                ))
            )
          : (<p className="no-results">No movies found. Try a different search! 🎬</p>)}

        </div>
    )
}

export default SearchResults;





 