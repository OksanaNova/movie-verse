import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './layout/Navbar';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Footer from './layout/Footer';
import './App.css'
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (

    <ThemeProvider>
        <Router id="root">
    
          <Navbar />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/movie/:id' element={<MovieDetails />} />
            </Routes>
          </main>

          <Footer />

        </Router>
    </ThemeProvider>
  )
}

export default App
