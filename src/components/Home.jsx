
import { useState } from "react";
import SearshInput from "./SearchInput";


function Home() {

    
      const [userSearch, setUserSearch] = useState('');

    return (
        <div>
            <SearshInput 
            userSearch={userSearch}
            setUserSearch={setUserSearch}/>
        </div>
    )
}

export default Home