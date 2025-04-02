import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {

    return (
        <nav>
            <div className='logo'>
                <h1>Movie<span>Verse</span></h1>
                <p>Find your next favorite movie</p>
            </div>
            
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navbar