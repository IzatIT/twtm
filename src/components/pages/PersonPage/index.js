import React, { useState, useEffect } from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../assets/getMovies';
import Loading from '../../../assets/Loading';
import PersonBody from './components/PersonBody';
import PersonHeader from './components/PersonHeader';
import ErrorPage from '../ErrorPage';
import { ADD_PERSON_DETAILS, ERROR_GEN, ERROR_PERSON } from '../../../redux/store/actions';

function PersonPage() {
    const { language } = useSelector(state => state.language)
    const { actorId } = useParams()
    const { mode } = useSelector(state => state.mode)
    const [loading, setLoading] = useState(false)
    const { personError } = useSelector(state => state.error)
    const dispatch = useDispatch()

    const getCreditInfo = async () => {
        setLoading(true)
        try {
            await getMovies('person', actorId, language)
                .then(data => dispatch({ type: ADD_PERSON_DETAILS, payload: data }))
            dispatch({ type: ERROR_PERSON, payload: '' })
            dispatch({ type: ERROR_GEN, payload: '' })

        } catch (e) {
            dispatch({ type: ERROR_PERSON, payload: e.message })
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
                                        <PersonHeader />
                                        <PersonBody />
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
        dispatch({ type: ERROR_PERSON, payload: error.message })
    }

}

export default PersonPage;