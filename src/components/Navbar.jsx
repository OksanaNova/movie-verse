import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <h1>MovieVerse</h1>
                <p>Find your next favorite movie</p>
            </div>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
                {/* add theme */}
            </div>
        </nav>
    )
}

export default Navbar