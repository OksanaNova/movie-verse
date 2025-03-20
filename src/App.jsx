import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';
// import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import './App.css'

function App() {


  return (<Router>
    
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>

    <Footer />

  </Router>

  )
}

export default App
