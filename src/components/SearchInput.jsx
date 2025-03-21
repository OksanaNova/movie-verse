import image from '../assets/ri-search-line.svg'

function SearshInput() {

    return (
        <div className='search_container'>
           <form>
             <input placeholder="Search..." type="text"/>
             <button className='btnSearch'>
                <img src={image} width="25px" height="25px"/>
            </button>
          </form>
      </div>
    )
}

export default SearshInput