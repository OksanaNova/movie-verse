import MovieCard from "./MovieCard/MovieCard";
import './SearchResults.css'

function SearchResults({searchResults, userSearch}) {

    return (
        <div className="search-result-container">
            {searchResults.map((element) => (
                <MovieCard 
                key={element.id}
                id={element.id}
                title={element.title}
                vote={element.vote_average}
                poster_path={element.poster_path}
                searchResults={searchResults}
                userSearch={userSearch}/>
                ))
            }
        </div>
    )
}

export default SearchResults;





 