import React, { useEffect, useState } from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../assets/Loading';
import axios from 'axios';
import { Apikey } from '../../../assets/Apikey';
import ResultMovie from './components/ResultMovie';
import ResultPeople from './components/ResultPeople';
import ResultKeyword from './components/ResultKeyword';
import ResultTvShow from './components/ResultTvShow';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { ERROR_GEN, ERROR_SEARCH, INPUT_CHANGE } from '../../../redux/store/actions';
function SearchResults() {
    const navigate = useNavigate()
    const { inputValue } = useSelector(state => state.inputValue)
    const { searchValue } = useParams()
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.language)
    const [foundMovies, setFoundMovies] = useState([])
    const [movieTotal, setMovieTotal] = useState(0)
    const [foundPeople, setFoundPeople] = useState([])
    const [peopleTotal, setPeopleTotal] = useState(0)
    const [fountKeywords, setFoundKeywords] = useState([])
    const [keywordsTotal, setKeywordsTotal] = useState(0)
    const [foundTvShows, setFoundTvShows] = useState([])
    const [tvShowsTotal, setTvShowsTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const { mode } = useSelector(state => state.mode)
    const [selected, setSelected] = useState(0)
    const { searchError } = useSelector(state => state.error)


    const handleChange = (e) => {
        dispatch({ type: INPUT_CHANGE, payload: e.target.value })
    }


    const handleClick = (num) => {
        setSelected(num)
    }

    const searchMovies = async () => {
        try {
            const api = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&language=${language}&query=${searchValue}&page=${page}&include_adult=true`)
                .then(({ data }) => {
                    setMovieTotal(data.total_results)
                    setFoundMovies(data.results)
                })
            dispatch({ type: ERROR_GEN, payload: '' })
            dispatch({ type: ERROR_SEARCH, payload: '' })

        }
        catch (e) {
            dispatch({ type: ERROR_SEARCH, payload: e.message })
        }
    }
    const searchPeople = async () => {
        try {
            const api = await axios(`https://api.themoviedb.org/3/search/person?api_key=${Apikey}&language=${language}&query=${searchValue}&page=${page}&include_adult=true`)
                .then(({ data }) => {
                    setPeopleTotal(data.total_results)
                    setFoundPeople(data.results)
                })
        }
        catch (e) {
            dispatch({ type: ERROR_SEARCH, payload: e.message })
        }
    }
    const searchKeywords = async () => {
        try {
            const api = await axios(`https://api.themoviedb.org/3/search/keyword?api_key=${Apikey}&query=${searchValue}&page=${page}`)
                .then(({ data }) => {
                    setKeywordsTotal(data.total_results)
                    setFoundKeywords(data.results)
                })
        }
        catch (e) {
            dispatch({ type: ERROR_SEARCH, payload: e.message })
        }
    }
    const searchTvShows = async () => {
        try {
            const api = await axios(`https://api.themoviedb.org/3/search/tv?api_key=${Apikey}&language=${language}&query=${searchValue}&page=${page}&include_adult=true`)
                .then(({ data }) => {
                    setTvShowsTotal(data.total_results)
                    setFoundTvShows(data.results)
                })
        }
        catch (e) {
            dispatch({ type: ERROR_SEARCH, payload: e.message })
        }
    }

    // 
    useEffect(() => {
        setLoading(true)
        searchMovies()
        searchPeople()
        searchKeywords()
        searchTvShows()
        setTimeout(() => setLoading(false), 3000)
    }, [language])
    return (
        <section id="found_movies"
            style={{
                background: mode ? 'black' : 'white',
                color: mode ? 'white' : 'black',
                minHeight: loading ? '100vh' : 'auto',
                minWidth: loading ? '100vw' : 'auto',
                position: loading ? 'absolute' : 'static',
                top: '0',
                left: '0'
            }}
        >
            {
                loading ?
                    <div className='loading_container'>
                        <Loading />
                    </div>
                    :
                    <div className='container'>
                        {
                            searchError ?
                                <ErrorPage />
                                :
                                <div className='found_movies_gen'>
                                    <header className='found_movies_header'>
                                        <input
                                            // onClick={handleClickNavigate}
                                            className='found_movies_input'
                                            onChange={handleChange}
                                            type="text" value={inputValue}
                                            style={{
                                                color: mode ? 'wheat' : 'gray',
                                                borderBottom: `1px solid ${mode ? 'wheat' : 'black'}`
                                            
                                            }}/>
                                    </header>
                                    <div className='found_movies'>
                                        <div className='found_movies_left'>
                                            <div className='found_movies_left_container'>
                                                <div className='found_movies_left_title'>
                                                    <h1>{language === 'ru-RU' ? 'Результаты поиска' : 'Search Results'}</h1>
                                                </div>
                                                <nav className='found_movies_nav'>
                                                    <div
                                                        style={{
                                                            background: selected == 0 ? 'rgb(220, 216, 216)' : 'initial'
                                                        }}
                                                        className='nav_link'>
                                                        <button
                                                            style={{
                                                                color: selected === 0 && mode ? 'black' : mode ? "white" : 'white',
                                                            }}
                                                            onClick={() => handleClick(0)}
                                                        >{language === 'ru-RU' ? 'Фильмы' : 'Movies'}</button>
                                                        <p
                                                            style={{
                                                                color: mode ? 'black' : 'white',
                                                                background: selected == 0 ? 'white' : 'rgb(220, 216, 216)'
                                                            }}
                                                            className='found_movies_total'>{movieTotal}</p>
                                                    </div>
                                                    <div
                                                        style={{
                                                            background: selected == 1 ? 'rgb(220, 216, 216)' : 'initial'
                                                        }}
                                                        className='nav_link'>
                                                        <button
                                                            style={{
                                                                color: selected === 1 && mode ? 'black' : mode ? "white" : 'white',
                                                            }}
                                                            onClick={() => handleClick(1)}
                                                        >{language === 'ru-RU' ? 'Люди' : 'People'}</button>
                                                        <p
                                                            style={{
                                                                color: mode ? 'black' : 'white',
                                                                background: selected == 1 ? 'white' : 'rgb(220, 216, 216)'
                                                            }}
                                                            className='found_movies_total'>{peopleTotal}</p>
                                                    </div>
                                                    <div
                                                        style={{
                                                            background: selected == 2 ? 'rgb(220, 216, 216)' : 'initial'
                                                        }}
                                                        className='nav_link'>
                                                        <button
                                                            style={{

                                                                color: selected === 2 && mode ? 'black' : mode ? "white" : 'white',
                                                            }}
                                                            onClick={() => handleClick(2)}
                                                        >{language == 'ru-RU' ? 'Ключевые слова' : 'Keywords'}</button>
                                                        <p
                                                            style={{
                                                                color: mode ? 'black' : 'white',
                                                                background: selected == 2 ? 'white' : 'rgb(220, 216, 216)'
                                                            }}
                                                            className='found_movies_total'>{keywordsTotal}</p>
                                                    </div>
                                                    <div
                                                        style={{
                                                            background: selected == 3 ? 'rgb(220, 216, 216)' : 'initial'
                                                        }}
                                                        className='nav_link'>
                                                        <button
                                                            style={{
                                                                color: selected === 3 && mode ? 'black' : mode ? "white" : 'white',
                                                            }}
                                                            onClick={() => handleClick(3)}
                                                        >{language === 'ru-RU' ? 'ТВ шоу' : 'TV Shows'}</button>
                                                        <p
                                                            style={{
                                                                color: mode ? 'black' : 'white',
                                                                background: selected == 3 ? 'white' : 'rgb(220, 216, 216)'
                                                            }}
                                                            className='found_movies_total'>{tvShowsTotal}</p>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className='found_movies_right'>
                                            {
                                                selected == 0 ?
                                                    foundMovies.map(el =>
                                                        <div className='found_movies_item' key={el.id}>
                                                            <ResultMovie movie={el} />
                                                        </div>
                                                    )
                                                    :
                                                    selected == 1 ?
                                                        foundPeople.map(el =>
                                                            <div className='found_movies_item' key={el.id}>
                                                                <ResultPeople people={el} />
                                                            </div>
                                                        )
                                                        :
                                                        selected == 2 ?
                                                            fountKeywords.map(el =>
                                                                <div className='found_movies_item' key={el.id}>
                                                                    <ResultKeyword keyword={el} />
                                                                </div>
                                                            )
                                                            :
                                                            selected == 3 ?
                                                                foundTvShows.map(el =>
                                                                    <div className='found_movies_item' key={el.id}>
                                                                        <ResultTvShow tvShow={el} />
                                                                    </div>
                                                                )
                                                                : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                        }

                    </div>
            }
        </section>
    );
}

export default SearchResults;