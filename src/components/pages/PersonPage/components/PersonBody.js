import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../../assets/getMovies';
import Loading from '../../../../assets/Loading';
import { ADD_PERSON_CREDITS, ADD_PERSON_TV_CREDITS, ERROR_GEN, ERROR_PERSON } from '../../../../redux/store/actions';
import PersonCredits from './PersonCredits';
import PersonTopMovies from './PersonTopMovies';
import PersonTvCredits from './PersonTvCredits';

function PersonBody() {
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)
    const { personDetails } = useSelector(state => state.data)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [hide, setHide] = useState(true)






    const getMovieCredits = async () => {
        try {
            await getMovies('person', personDetails.id + '/movie_credits', language)
                .then(data => {
                    dispatch({ type: ADD_PERSON_CREDITS, payload: data })
                })
            dispatch({ type: ERROR_GEN, payload: '' })
            dispatch({ type: ERROR_PERSON, payload: '' })
        }
        catch (e) {
            dispatch({ type: ERROR_GEN, payload: e.message })
        }
    }
    const getTvCredits = async () => {
        try {
            await getMovies('person', personDetails.id + '/tv_credits', language)
                .then(data => {
                    dispatch({ type: ADD_PERSON_TV_CREDITS, payload: data })
                })
        }
        catch (e) {
            dispatch({ type: ERROR_PERSON, payload: e.message })
        }
    }



    useEffect(() => {
        setLoading(true)
        getMovieCredits()
        getTvCredits()
        setLoading(false)
    }, [language])
    try {
        return (
            <div>
                {
                    loading ?
                        <div className='loading_container'>
                            <Loading />
                        </div>
                        :
                        <div className='person_body'>
                            <div className='person_biography'>
                                <h1 className='person_name'>{personDetails.name}</h1>
                                {
                                    personDetails.biography &&
                                    <div className='person_biography_item'
                                        style={{
                                            maxHeight: hide ? '311px' : 'auto',
                                            overflow: hide ? 'hidden' : 'visible'
                                        }}
                                    >
                                        <h3>{language === 'ru-RU' ? 'Биография' : 'Biography'}</h3>
                                        <p>{personDetails.biography}</p>
                                    </div>
                                }

                                {
                                    personDetails?.biography?.length > 500 &&
                                    <button
                                        onClick={() => setHide(!hide)}
                                        style={{
                                            background: mode ? 'black' : 'white',
                                            boxShadow: mode && hide ? `-50px 0 30px 20px black,
                        -100px 0 50px 20px black,
                        -130px 0 80px 20px black,
                        -170px 0 100px 20px black`
                                                : !mode && hide ? `-50px 0 30px 20px white,
                        -100px 0 50px 20px white,
                        -130px 0 80px 20px white,
                        -170px 0 100px 20px white` : ''
                                        }} className='person_biography_btn'>{language === 'ru-RU' && hide ? 'Читать ещё' :
                                            language === 'en-US' && hide ? 'Read more' :
                                                language === 'ru-RU' && !hide ? 'Читать меньше' :
                                                    language === 'en-EN' && !hide ? 'Read less' : ''
                                        } &#62;</button>
                                }

                            </div>
                            <div className='person_credit_movie_gen'>
                                <h3 className='person_credits_title'>{language === 'ru-RU' ? 'Известность за' : 'Known for'}</h3>
                                        <PersonTopMovies loading={loading} />
                            </div>
                                    <div className='person_all_credits'>
                                        <PersonCredits />
                                        <PersonTvCredits />
                                    </div>
                        </div >
                }
            </div>

        );
    } catch (error) {
        dispatch({ type: ERROR_PERSON, payload: error.message })
    }

}

export default PersonBody;