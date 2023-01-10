import React, { useState, useEffect } from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../assets/getMovies';
import Loading from '../../../assets/Loading';
import PersonBody from './components/PersonBody';
import PersonHeader from './components/PersonHeader';
import ErrorPage from '../ErrorPage';

function PersonPage() {
    const { language } = useSelector(state => state.language)
    const { actorId } = useParams()
    const {mode} = useSelector(state => state.mode)
    const [loading, setLoading] = useState(false)
    const [personDetails, setPersonDetails] = useState({})
    const { personError } = useSelector(state => state.error)

    const dispatch = useDispatch()

    const getCreditInfo = async () => {
        setLoading(true)
        try {
            await getMovies('person', actorId, language)
                .then(data => setPersonDetails(data))
                dispatch({ type: 'ERROR', payload: '' })
                dispatch({ type: 'ERRORPERSON', payload: '' })
            } catch (e) {
            dispatch({ type: 'ERRORPERSON', payload: e.message })
        }
        setLoading(false)
    }


    useEffect(() => {
        getCreditInfo()
    }, [language])
    try {
        return (

            <div id="personPage" 
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
                        <div className='container'>
                            {
                                personError === '' ?
                                    <div className='person_page'>
                                        <PersonHeader personDetails={personDetails} />
                                        <PersonBody personDetails={personDetails} />
                                    </div>
                                    :
                                    <div className='error_container'>
                                        <ErrorPage />
                                    </div>

                            }

                        </div>

                }

            </div>
        )
    } catch (error) {
        dispatch({ type: 'ERRORPERSON', payload: error.message })
    }

}

export default PersonPage;