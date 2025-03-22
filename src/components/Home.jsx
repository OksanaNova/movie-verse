
import { useState } from "react";
import SearshInput from "./SearchInput";
import SearchResults from "./SearchResults";


function Home() {
    
      const [userSearch, setUserSearch] = useState('');
      const [searchResults, setSearchResults] = useState([])

    return (
        <div>

            <SearshInput 
            userSearch={userSearch}
            setUserSearch={setUserSearch}
            setSearchResults={setSearchResults}/>

            <SearchResults 
            searchResults={searchResults}
            />
        </div>
    )
}

export default Home