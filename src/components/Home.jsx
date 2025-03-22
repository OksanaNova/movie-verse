
import { useState } from "react";
import SearshInput from "./SearchInput";


function Home() {
    
      const [userSearch, setUserSearch] = useState('');
      const [searchResults, setSearchResults] = useState([])

    return (
        <div>
            <SearshInput 
            userSearch={userSearch}
            setUserSearch={setUserSearch}
            searchResults={searchResults}
            setSearchResults={setSearchResults}/>
        </div>
    )
}

export default Home