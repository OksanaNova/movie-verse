import { useEffect } from 'react';
import image from '../assets/ri-search-line.svg'

function SearshInput( {userSearch, setUserSearch, searchResults, setSearchResults} ) {

    const MY_KEY = "c6b908d5b1167252cde35a2286356a40"
    // https://api.themoviedb.org/3/discover/movie

    useEffect( ()=> {
        const getMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&query=avatar`);
            const data = await response.json();
            setSearchResults(data.results)
            // console.log(data.results)
        }
        getMovie()
    }, [])

    const myMovieSearch = (e) => {
        // console.log(e.target.value)
        setUserSearch(e.target.value)
    }

    return (
        <div>
            <div className='search_container'>
                <form>
                  <input 
                   placeholder="Search..." 
                   type="text"
                   value={userSearch}
                   onChange={myMovieSearch}/>

                  <button className='btnSearch'>
                    <img src={image} width="25px" height="25px"/>
                  </button>
                </form>
          </div>

          {searchResults.map((element, index) => {
            const {title, vote_average, overview} = element;
            return (
                <div key={index}>
                    <p>{title}</p>
                    <p>{vote_average}</p>
                    <p>{overview}</p>
                </div>
            )
          })}

      </div>
    )
}

export default SearshInput