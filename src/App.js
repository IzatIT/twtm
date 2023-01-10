import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MoviePage from './components/pages/MoviePage';
import { useDispatch, useSelector } from 'react-redux';
import TvShowPage from './components/pages/TvShowPage';
import PersonPage from './components/pages/PersonPage';
import SearchResults from './components/pages/SearchResults';
import { SHOWED_SUBMENU } from './redux/store/actions';

function App() {
  const dispatch = useDispatch()
  const { showed } = useSelector(state => state.submenu)
  
  const handleClick = (element) => {
    if (showed !== -1) {
      if (element.target.className !== 'menu_title') {
        dispatch({ type: SHOWED_SUBMENU, payload: -1 })
      }
    }
  }

  return (
    <div className="App"
      onClick={handleClick}
    >
      <Header />
      <Routes>
        <Route path='/twtm' element={<HomePage />} />
        <Route path='/movie/:movieId' element={<MoviePage />} />
        <Route path='/actor/:actorId' element={<PersonPage />} />
        <Route path='/tv/:showId' element={<TvShowPage />} />
        <Route path='/search/:searchValue' element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
