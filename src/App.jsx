import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import './App.css'


function App() {

  return (<Router id="root">
    
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

  )
}

export default App
