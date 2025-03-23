import { useEffect } from 'react';
import image from '../assets/ri-search-line.svg'

function SearshInput( {userSearch, setUserSearch, setSearchResults, wordSubmitted, setWordSubmitted} ) {

    const MY_KEY = "c6b908d5b1167252cde35a2286356a40";

    useEffect( ()=> {
        const getMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&query=${wordSubmitted}`);
            const data = await response.json();
            setSearchResults(data.results)
            // console.log(data.results)
        }
        getMovie()
    }, [wordSubmitted])

    const myMovieSearch = (e) => {
        // console.log(e.target.value)
        setUserSearch(e.target.value)
    }

    const finalSearch = (e) => {
        e.preventDefault()
        setWordSubmitted(userSearch)
    }

    return (
        <div>

            <div className='search_container'>
                <form onSubmit={finalSearch}>
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


      </div>
    )
}

export default SearshInput