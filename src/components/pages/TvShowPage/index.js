import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../assets/getMovies';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TvHeader from './components/Header';
import TvBody from './components/MovieBody';
import Loading from '../../../assets/Loading';

function TvShowPage() {
    const [loading, setLoading] = useState(false)
    const { showId } = useParams()
    const {mode} = useSelector(state => state.mode)
    const { language } = useSelector(state => state.language)
    const [tvDetails, setTvDetails] = useState({})
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [genres, setGenres] = useState([])
    const [error, setError] = useState(false)

    const getDetails = async (id) => {
        setLoading(true)
        try {
            await getMovies('tv', id, language)
                .then(data => {
                    setTvDetails(data)
                    setGenres(data.genres)
                })
        }
        catch(e){
            setError(true)
        }
        setLoading(false)
    }
    const getCredits = async (id) => {
        setLoading(true)
        try {
            await getMovies('tv', id + '/credits', language)
                .then(data => {
                    setCrew(data.crew)
                    setCast(data.cast)
                })
        }
        catch (e) {
            setError(true)
        }
        setLoading(false)
    }


    useEffect(() => {
        getDetails(showId)
        getCredits(showId)
    }, [])
    return (
        <div
        style={{
            background: mode ? 'black' : 'white',
            color: mode ? 'white' : 'black'
        }}
        >
            {
                loading ?
                    <div className='loading_container'>
                        <Loading />
                    </div>
                    : 
                    <div>
                        <TvHeader error={error} tvDetails={tvDetails} crew={crew} genres={genres} />
                        <TvBody error={error} cast={cast} tvDetails={tvDetails} showId={showId} />
                    </div>
            }
        </div>
    );
}


export default TvShowPage;