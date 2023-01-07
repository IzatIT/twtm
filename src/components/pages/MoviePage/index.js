import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../assets/getMovies';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieHeader from './components/Header';
import MovieBody from './components/MovieBody';
import Loading from '../../../assets/Loading';
import { getCategories } from '../HomePage/components/HomeSectionOne/components';

function MoviePage() {
    const [loading, setLoading] = useState(false)
    const { movieId } = useParams()
    const { language } = useSelector(state => state.language)
    const [movieDetails, setMovieDetails] = useState({})
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [genres, setGenres] = useState([])

    const getDetails = async (id) => {
        setLoading(true)
        await getMovies('movie', id, language)
            .then(data => {
                setMovieDetails(data)
                setGenres(data.genres)
            })
        setLoading(false)
    }
    const getCredits = async (id) => {
        setLoading(true)
        await getMovies('movie', id + '/credits', language)
            .then(data => {
                setCrew(data.crew)
                setCast(data.cast)
            })
        setLoading(false)
    }


    useEffect(() => {
        getDetails(movieId)
        getCredits(movieId)
    }, [])
    return (
        <div>
            {
                loading ?
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