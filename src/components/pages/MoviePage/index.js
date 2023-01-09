import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../assets/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieHeader from './components/Header';
import MovieBody from './components/MovieBody';
import Loading from '../../../assets/Loading';
import { getCategories } from '../HomePage/components/HomeSectionOne/components';

function MoviePage() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { movieId } = useParams()
    const { language } = useSelector(state => state.language)
    const [movieDetails, setMovieDetails] = useState({})
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [genres, setGenres] = useState([])
    const {error} = useSelector(state => state.error)

    const getDetails = async (id) => {
        setLoading(true)
        try {
            await getMovies('movie', id, language)
                .then(data => {
                    setMovieDetails(data)
                    setGenres(data.genres)
                })
        } catch (e) {
            dispatch({ type: 'ERROR', payload: e.message })
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
        } catch (e) {
            dispatch({ type: 'ERROR', payload: e.message })
        }
        setLoading(false)
    }


    useEffect(() => {
        getDetails(movieId)
        getCredits(movieId)
    }, [])
    return (
        <div>
            {
                loading && error !== '' ?
                    <div className='loading_container'>
                        <Loading />
                    </div>
                    :
                    <div>
                        <MovieHeader movieDetails={movieDetails} crew={crew} genres={genres} />
                        <MovieBody cast={cast} movieDetails={movieDetails} movieId={movieId} />
                    </div>
            }
        </div>
    );
}


export default MoviePage;