import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../assets/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieHeader from './components/Header';
import MovieBody from './components/MovieBody';
import Loading from '../../../assets/Loading';
import ErrorPage from '../ErrorPage';
function MoviePage() {
    const [loading, setLoading] = useState(false)
    const { movieId } = useParams()
    const { language } = useSelector(state => state.language)
    const [movieDetails, setMovieDetails] = useState({})
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [genres, setGenres] = useState([])
    const dispatch = useDispatch()
    const { movieError } = useSelector(state => state.error)
    const getDetails = async (id) => {
        setLoading(true)
        try {
            await getMovies('movie', id, language)
                .then(data => {
                    setMovieDetails(data)
                    setGenres(data.genres)
                })
        } catch (e) {
            dispatch({ type: 'ERRORMOVI', payload: e.message })
        }

        setLoading(false)
    }
    const getCredits = async (id) => {
        setLoading(true)
        try {
            await getMovies('movie', id + '/credits', language)
                .then(data => {
                    setCrew(data.crew)
                    setCast(data.cast)
                })
                dispatch({ type: 'ERROR', payload: '' })
        } catch (e) {
            dispatch({ type: 'ERRORMOVIE', payload: e.message })
        }
        setLoading(false)
    }


    useEffect(() => {
        getDetails(movieId)
        getCredits(movieId)
    }, [])
    try {
        return (
            <>

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
                                        <MovieHeader movieDetails={movieDetails} crew={crew} genres={genres} />
                                        <MovieBody cast={cast} movieDetails={movieDetails} movieId={movieId} />
                                    </>
                                    :
                                    <div className='error_container'>
                                        <ErrorPage />
                                    </div>
                            }
                        </>
                }
            </>

        );
    } catch (error) {
        dispatch({ type: 'ERRORMOVIE', payload: error.message })
    }

}


export default MoviePage;