import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Facebook from '../../../../../assets/Icons/Facebook';
import Instagram from '../../../../../assets/Icons/Instagram';
import Twitter from '../../../../../assets/Icons/Twitter';
import PersonCard from '../../../PersonCard';
import { getMovies } from '../../../../../assets/getMovies';
import { ERROR_MOVIE, ERROR_GEN, ADD_MOVIE_KEYWORDS, ADD_MOVIE_SOCIAL_MEDIA } from '../../../../../redux/store/actions';
import { useParams } from 'react-router-dom';

function MovieBody() {
    const { movieId } = useParams()
    const { movieDetails } = useSelector(state => state.data)
    const { movieSocialMedias } = useSelector(state => state.data)
    const { movieKeywords } = useSelector(state => state.data)
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)
    const { cast } = useSelector(state => state.data.movieCredits)
    const dispatch = useDispatch()

    const getKeywords = async () => {
        try {
            await getMovies('movie', movieId + '/keywords', language)
                .then(keywords =>
                    dispatch({ type: ADD_MOVIE_KEYWORDS, payload: keywords.keywords })
                )
            dispatch({ type: ERROR_MOVIE, payload: '' })
            dispatch({ type: ERROR_GEN, payload: '' })

        } catch (e) {
            dispatch({ type: ERROR_MOVIE, payload: e.message })
        }
    }
    const getSocialMedia = async () => {
        try {
            await getMovies('movie', movieId + '/external_ids', language)
                .then(data =>
                    dispatch({ type: ADD_MOVIE_SOCIAL_MEDIA, payload: data })
                )
        } catch (e) {
            dispatch({ type: ERROR_MOVIE, payload: e.message })
        }
    }


    useEffect(() => {
        getKeywords()
        getSocialMedia()
    }, [language])

    try {
        return (
            <section className='movie_body' style={{
                color: mode ? 'white' : 'black'
            }}>
                <div className='container'>
                    <div className='movie_body'>
                        <div className='movie_body_left'>
                            <h1 className='starring_title'>{language === 'ru-RU' ? 'В главных ролях' : 'Starring'}</h1>
                            <div className='movie_starring'>
                                {
                                    cast.filter((el, idx) => idx < 50).map(el => <PersonCard key={el.id} person={el} />)
                                }
                            </div>
                        </div>
                        <div className='movie_body_right'
                            style={{
                                boxShadow: `-100px 0 50px 10px ${mode ? 'black' : 'white'}`
                            }}
                        >
                            <nav className='movie_extarnals'>
                                <a className='movie_social' target='_blank' href={`https://www.facebook.com/${movieSocialMedias.facebook_id}`}><Facebook /></a>
                                <a className='movie_social' target='_blank' href={`https://twitter.com/${movieSocialMedias.twitter_id}`}><Twitter /></a>
                                <a className='movie_social' target='_blank' href={`https://www.instagram.com/${movieSocialMedias.wikidata_id}`}><Instagram /></a>
                            </nav>
                            <div className='movie_extra_info'>
                                <div className='extra_info_item'>
                                    <h3>{language === 'ru-RU' ? 'Исходное название' : 'Original title'}</h3>
                                    <p>{movieDetails.original_title}</p>
                                </div>
                                <div className='extra_info_item'>
                                    <h3>{language === 'ru-RU' ? 'Статус' : 'Status'}</h3>
                                    <p>{language === 'ru-RU' && movieDetails.status === "Released" ? 'Выпущено' :
                                        language === 'en-US' && movieDetails.status === "Released" ? "Released" :
                                            language === 'ru-RU' && movieDetails.status !== "Released" ? "Не выпущено" : "Not Released"}</p>
                                </div>
                                <div className='extra_info_item'>
                                    <h3>{language === 'ru-RU' ? 'Исходный язык' : 'Original language'}</h3>
                                    <p>{language === 'ru-RU' && movieDetails.original_language === "en" ? 'английский' :
                                        language === 'en-US' && movieDetails.status === "en" ? "English" :
                                            language === 'ru-RU' && movieDetails.status === "ru" ? "Русский" :
                                                language === 'en-US' && movieDetails.status === "кг" ? "Russian" : 'another'}</p>
                                </div>
                                <div className='extra_info_item'>
                                    <h3>{language === 'ru-RU' ? 'Бюджет' : 'Budget'}</h3>
                                    <p>$ {movieDetails.budget}</p>
                                </div>
                                <div className='extra_info_item'>
                                    <h3>{language === 'ru-RU' ? 'Сборы' : 'Budget'}</h3>
                                    <p>$ {movieDetails.revenue}</p>
                                </div>
                            </div>
                            <div className='movie_keywords'>
                                {
                                    movieKeywords.map(el => <button
                                        style={{
                                            color: mode ? 'white' : 'black',
                                            background: mode ? 'black' : 'white',
                                            border: mode ? '1px solid white' : ''
                                        }}
                                        key={el.id} className="keyword_btn">{el.name}</button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        dispatch({ type: ERROR_MOVIE, payload: error.message })

    }

}

export default MovieBody;