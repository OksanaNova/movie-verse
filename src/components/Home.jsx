
import { useEffect, useState } from "react";
import SearshInput from "./SearchInput";
import SearchResults from "./SearchResults";
import MoviesCarousel from "./MovieCarousel";


function Home() {

    const MY_KEY = "c6b908d5b1167252cde35a2286356a40";
    
      const [userSearch, setUserSearch] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      const [wordSubmitted, setWordSubmitted] = useState('');

      const [searchAttempted, setSearchAttempted] = useState(false);

      const [trendingMovies, setTrendingMovies] = useState([]);

      useEffect( () => {
        const getTrendingMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${MY_KEY}`);
            const data = await response.json();
            setTrendingMovies(data.results)
        }
        getTrendingMovies()
      }, [])

    return (

        <div>
            <div>
                <SearshInput 
                userSearch={userSearch}
                setUserSearch={setUserSearch}
                setSearchResults={setSearchResults}
                wordSubmitted={wordSubmitted}
                setWordSubmitted={setWordSubmitted}
                setSearchAttempted={setSearchAttempted}/>
            </div>

            <div>
                {searchResults.length > 0 ? (
                    <SearchResults 
                    searchResults={searchResults}/>
                ) : searchAttempted ? (
                    <>
                        <p className="no-results">No movies found. Try a different search! 🎬</p>
                        <div>
                            <p className="carousel-header"><b>Trending</b> Now</p>
                            <MoviesCarousel 
                            trendingMovies={trendingMovies}/>
                        </div>
                   </>
                  ) : (
                   <div>
                        <p className="carousel-header"><b>Trending</b> Now</p>
                        <MoviesCarousel 
                        trendingMovies={trendingMovies}/>
                   </div>
                )}
            </div>

        </div>
    )
}

export default Home