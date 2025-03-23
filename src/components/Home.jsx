
import { useState } from "react";
import SearshInput from "./SearchInput";
import SearchResults from "./SearchResults";


function Home() {
    
      const [userSearch, setUserSearch] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      const [wordSubmitted, setWordSubmitted] = useState('');

    return (
        <div>

            <SearshInput 
            userSearch={userSearch}
            setUserSearch={setUserSearch}
            setSearchResults={setSearchResults}
            wordSubmitted={wordSubmitted}
            setWordSubmitted={setWordSubmitted}/>

            <SearchResults 
            searchResults={searchResults}
            />
        </div>
    )
}

export default Home