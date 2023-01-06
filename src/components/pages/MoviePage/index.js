import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../assets/getMovies';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieHeader from './components/Header';
import MovieBody from './components/MovieBody';



function MoviePage() {
    const { movieId } = useParams()
    const { language } = useSelector(state => state.language)
    const [movieDetails, setMovieDetails] = useState({})
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [genres, setGenres] = useState([])





    useEffect(() => {
        getMovies('movie', movieId, language)
            .then(data => {
                setMovieDetails(data)
                setGenres(data.genres)
            })
        getMovies('movie', movieId + '/credits', language)
            .then(data => {
                setCrew(data.crew)
                setCast(data.cast)
            })
    })
    return (
        <div>
            <MovieHeader movieDetails={movieDetails} crew={crew} genres={genres} />
            <MovieBody cast={cast} movieDetails={movieDetails} movieId={movieId}/>
        </div>
    );
}


export default MoviePage;