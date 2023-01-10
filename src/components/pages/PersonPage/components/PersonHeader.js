import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../../assets/getMovies';
import Facebook from '../../../../assets/Icons/Facebook';
import Instagram from '../../../../assets/Icons/Instagram';
import Twitter from '../../../../assets/Icons/Twitter';
import Loading from '../../../../assets/Loading';
import { ERROR_PERSON, ERROR_GEN, ADD_PERSON_SOCIAL_MEDIA } from '../../../../redux/store/actions';
function PersonHeader() {
    const [loading, setLoading] = useState(false)
    const { personDetails } = useSelector(state => state.data)
    const {personSocialMedias} = useSelector(state => state.data)
    const { language } = useSelector(state => state.language)
    const dispatch = useDispatch()


    const getSocial = async () => {
        setLoading(true)
        try {
            await getMovies('person', personDetails.id + '/external_ids', language)
                .then(data => dispatch({type: ADD_PERSON_SOCIAL_MEDIA, payload: data}))
            dispatch({ type: ERROR_GEN, payload: '' })
            dispatch({ type: ERROR_PERSON, payload: '' })
        } catch (e) {
            dispatch({ type: ERROR_PERSON, payload: '' })
        }
        setLoading(false)
    }

    useEffect(() => {
        getSocial()
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
                        <header className='person_header' >
                            <img className='person_img' loading='lazy' width={300} height={450} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${personDetails.profile_path}`} alt="Image not available" />
                            <div className='person_details'>
                                <nav className='person_social'>
                                    <a href={`https://facebook.com/${personSocialMedias.facebook_id}`}><Facebook /></a>
                                    <a href={`https://instagram.com/${personSocialMedias.instagram_id}`}><Instagram /></a>
                                    <a href={`https://twitter.com/${personSocialMedias.twitter_id}`}><Twitter /></a>
                                </nav>
                                <div className='person_info'>
                                    <h3 className='person_info_title'>{language === 'ru-RU' ? 'Персональная информация' : 'Personal Info'}</h3>
                                    <div className='person_info_gen'>
                                        <div className='person_info_item'>
                                            <h4>{language === 'ru-RU' ? 'Известность за' : 'Known for'}</h4>
                                            <p>{personDetails.known_for_department}</p>
                                        </div>
                                        <div className='person_info_item'>
                                            <h4>{language === 'ru-RU' ? 'Известно авторство' : 'Known credits'}</h4>
                                            {/* <p>{personDetails}</p> */}
                                        </div>
                                        <div className='person_info_item'>
                                            <h4>{language === 'ru-RU' ? 'Пол' : 'Gender'}</h4>
                                            <p>{personDetails.gender == 2 && language === 'en-US' ? 'Male' :
                                                personDetails.gender == 2 && language === 'ru-RU' ? 'Мужской' :
                                                    personDetails.gender == 1 && language === 'en-US' ? 'Female' :
                                                        personDetails.gender == 1 && language === 'ru-RU' ? 'Женский' : 'Unknown'} </p>
                                        </div>
                                        {
                                            personDetails.birthday &&
                                            <div className='person_info_item'>
                                                <h4>{language === 'ru-RU' ? 'Дата рождения' : 'Birthday'}</h4>
                                                <p>{personDetails.birthday}</p>
                                            </div>
                                        }

                                        {
                                            personDetails.place_of_birth &&
                                            <div className='person_info_item'>
                                                <h4>{language === 'ru-RU' ? 'Место рождения' : 'Place of Birth'}</h4>
                                                <p>{personDetails.place_of_birth}</p>
                                            </div>
                                        }

                                        {
                                            loading ?
                                                <Loading />
                                                :
                                                <div className='person_info_item known_as'>

                                                    <h4>{language === 'ru-RU' ? 'Также известность как' : 'Also Known As'}</h4>
                                                    <div className='person_name_container'>
                                                        {
                                                            personDetails?.also_known_as?.map((el, idx) => <p className='person_names' key={idx}>{el}</p>)
                                                        }
                                                    </div>

                                                </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </header>
                }
            </div>
        );
    } catch (error) {
        dispatch({ type: ERROR_PERSON, payload: error.message })
    }

}

export default PersonHeader;