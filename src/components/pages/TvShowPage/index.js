import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../assets/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TvHeader from './components/Header';
import TvBody from './components/MovieBody';
import Loading from '../../../assets/Loading';
import { ERROR_GEN } from '../../../redux/store/actions';

function TvShowPage() {
    const [loading, setLoading] = useState(false)
    const { showId } = useParams()
    const { mode } = useSelector(state => state.mode)
    const { language } = useSelector(state => state.language)
    const [tvDetails, setTvDetails] = useState({})
    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])
    const [genres, setGenres] = useState([])
    const dispatch = useDispatch()

    const getDetails = async (id) => {
        try {
            await getMovies('tv', id, language)
                .then(data => {
                    setTvDetails(data)
                    setGenres(data.genres)
                })
            dispatch({ type: ERROR_GEN, payload: '' })
        }
        catch (e) {
            dispatch({ type: ERROR_GEN, payload: e.message })
        }
    }
    const getCredits = async (id) => {
        try {
            await getMovies('tv', id + '/credits', language)
                .then(data => {
                    setCrew(data.crew)
                    setCast(data.cast)
                })
            dispatch({ type: ERROR_GEN, payload: '' })
        }
        catch (e) {
            dispatch({ type: ERROR_GEN, payload: e.message })
        }
    }


    useEffect(() => {
        setLoading(true)
        getDetails(showId)
        getCredits(showId)
        setTimeout(() => setLoading(false), 4000)
    }, [language])
    return (
        <div
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
                    <div>
                        <TvHeader tvDetails={tvDetails} crew={crew} genres={genres} />
                        <TvBody cast={cast} tvDetails={tvDetails} showId={showId} />
                    </div>
            }
        </div>
    );
}


export default TvShowPage;