import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../assets/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieHeader from './components/Header';
import MovieBody from './components/MovieBody';
import Loading from '../../../assets/Loading';
import ErrorPage from '../ErrorPage';
import { ERROR_MOVIE, ERROR_GEN, ADD_MOVIE_DETAILS, ADD_MOVIE_CREDITS } from '../../../redux/store/actions';
function MoviePage() {
    const [loading, setLoading] = useState(false)
    const { movieId } = useParams()
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)
    const dispatch = useDispatch()
    const { movieError } = useSelector(state => state.error)



    const getDetails = async (id) => {
        try {
            await getMovies('movie', id, language)
                .then(data => {
                    dispatch({ type: ADD_MOVIE_DETAILS, payload: data })
                })
            dispatch({ type: ERROR_GEN, payload: '' })
            dispatch({ type: ERROR_MOVIE, payload: '' })

        } catch (e) {
            dispatch({ type: ERROR_MOVIE, payload: e.message })
        }
    }
    const getCredits = async (id) => {
        try {
            await getMovies('movie', id + '/credits', language)
                .then(data => {
                    dispatch({ type: ADD_MOVIE_CREDITS, payload: data })
                })
        } catch (e) {
            dispatch({ type: ERROR_MOVIE, payload: e.message })
        }
    }


    useEffect(() => {
        setLoading(true)
        getDetails(movieId)
        getCredits(movieId)
        setTimeout(() => setLoading(false), 3000)
    }, [language])
    try {
        return (
            <div style={{
                background: mode ? 'black' : 'white',
                minHeight: loading ? '100vh' : 'auto',
                minWidth: loading ? '100vw' : 'auto',
                position: loading ?  'absolute' : 'static',
                top: '0',
                left: '0'
            }}>

                {
                    loading ?
                        <div className='loading_container'>
                            <Loading />
                        </div>
                        :
                        <>
                            {
                                movieError === '' ?
                                    <>
                                        <MovieHeader />
                                        <MovieBody />
                                    </>
                                    :
                                    <div className='error_container'>
                                        <ErrorPage />
                                    </div>
                            }
                        </>
                }
            </div>

        );
    } catch (error) {
        dispatch({ type: ERROR_MOVIE, payload: error.message })
    }

}


export default MoviePage;