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
    const { language } = useSelector(state => state.language)
    const [tvDetails, setTvDetails] = useState({})
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [genres, setGenres] = useState([])

    const getDetails = async (id) => {
        setLoading(true)
        await getMovies('tv', id, language)
            .then(data => {
                setTvDetails(data)
                setGenres(data.genres)
            })
        setLoading(false)
    }
    const getCredits = async (id) => {
        setLoading(true)
        await getMovies('tv', id + '/credits', language)
            .then(data => {
                setCrew(data.crew)
                setCast(data.cast)
            })
        setLoading(false)
    }


    useEffect(() => {
        getDetails(showId)
        getCredits(showId)
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
                        <TvHeader tvDetails={tvDetails} crew={crew} genres={genres} />
                        <TvBody cast={cast} tvDetails={tvDetails} showId={showId} />
                    </div>
            }
        </div>
    );
}


export default TvShowPage;