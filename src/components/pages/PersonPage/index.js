import React, { useState, useEffect } from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../assets/getMovies';
import Loading from '../../../assets/Loading';
import PersonBody from './components/PersonBody';
import PersonHeader from './components/PersonHeader';

function PersonPage() {
    const { language } = useSelector(state => state.language)
    const { actorId } = useParams()
    const [loading, setLoading] = useState(false)
    const [personDetails, setPersonDetails] = useState({})
    const dispatch = useDispatch()
    const {error} = useSelector(state => state.error)

    const getCreditInfo = async () => {
        setLoading(true)
        try {
            await getMovies('person', actorId, language)
                .then(data => setPersonDetails(data))
        } catch (e) {
            dispatch({ type: 'ERROR', payload: e.message })
        }
        setLoading(false)
    }


    useEffect(() => {
        getCreditInfo()
    }, [])
    return (
        <div id="personPage">

                <div className='container'>
                    {
                        loading && error !== '' ?
                            <div className='loading_container'>
                                <Loading />
                            </div>
                            :
                            <div className='person_page'>
                                <PersonHeader personDetails={personDetails} />
                                <PersonBody personDetails={personDetails} />
                            </div>
                    }

                </div>
        </div>
    )
}

export default PersonPage;