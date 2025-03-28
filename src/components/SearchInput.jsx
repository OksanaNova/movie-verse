import { useState, useEffect } from 'react';
import image from '../assets/ri-search-line.svg';
import Swal from 'sweetalert2';
import LoaderPage from './LoaderPage';

function SearshInput( {userSearch, setUserSearch, setSearchResults, wordSubmitted, setWordSubmitted, setSearchAttempted} ) {

    const MY_KEY = "c6b908d5b1167252cde35a2286356a40";

    const [stateLoader, setStateLoader] = useState(false);

    useEffect( () => {

        if(!wordSubmitted) return;

        const getMovie = async () => {
            setStateLoader(true);
            setSearchAttempted(true);
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&query=${wordSubmitted}`);
            
            if(response.ok) {
                setStateLoader(false);
                const data = await response.json();
                setSearchResults(data.results);
                // console.log('data.results', data.results);
            } else {
                setStateLoader(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        }
        getMovie()
    }, [wordSubmitted])

    const myMovieSearch = (e) => {
        // console.log(e.target.value)
        setUserSearch(e.target.value)
    }

    const finalSearch = (e) => {
        e.preventDefault();
        if(userSearch.trim() === '') {
            Swal.fire("Please enter a movie name! 🎬");
            return;
        }
        setWordSubmitted(userSearch);
        setUserSearch('')
    }

    return (

        <>
            {stateLoader && <LoaderPage />}

            <div className='search-container'>
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

        </>
    )
}

export default SearshInput