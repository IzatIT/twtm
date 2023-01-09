import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies } from '../../../../assets/getMovies';
import Loading from '../../../../assets/Loading';
import MovieShow from '../../HomePage/components/HomeSectionOne/components/MovieShow';

function PersonBody({ personDetails }) {
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)
    const [crew, setCrew] = useState([])
    const [cast, setCast] = useState([])
    const [tvCrew, setTvCrew] = useState([])
    const [tvCast, setTvCast] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [hide, setHide] = useState(true)



    const getMovieCredits = async () => {
        setLoading(true)
        try {
            await getMovies('person', personDetails.id + '/movie_credits', language)
                .then(data => {
                    setCast(data.cast)
                    setCrew(data.crew)
                })
            dispatch({ type: 'ERROR', payload: '' })
            dispatch({ type: 'ERRORPERSON', payload: '' })
        }
        catch (e) {
            dispatch({ type: 'ERROR', payload: e.message })
        }
        setLoading(false)
    }
    const getTvCredits = async () => {
        setLoading(true)
        try {
            await getMovies('person', personDetails.id + '/tv_credits', language)
                .then(data => {
                    setTvCast(data.cast)
                    setTvCrew(data.crew)
                })
            dispatch({ type: 'ERROR', payload: '' })
            dispatch({ type: 'ERRORPERSON', payload: '' })
        }
        catch (e) {
            dispatch({ type: 'ERROR', payload: e.message })
        }
        setLoading(false)
    }



    useEffect(() => {
        getMovieCredits()
        getTvCredits()
    }, [])
    try {
        return (
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
                    {
                        cast[0] &&
                        <div className='person_movie_credits'>
                            <h4>{language === 'ru-RU' ? 'Фильмы' : 'Movies'}</h4>
                            {
                                loading ? <Loading /> :
                                    <div className='person_credits_movie'>
                                        {
                                            cast.filter((e, idx) => idx < 10).map(el => <MovieShow key={el.id} movie={el} activeCategory={false} />)
                                        }
                                        {
                                            crew.filter((e, idx) => idx < 10).map(el => <MovieShow key={el.id} movie={el} activeCategory={false} />)
                                        }
                                    </div>
                            }
                        </div>
                    }
                </div>

                <div className='person_all_credits'>
                    <div>
                        <h3 className='all_credits_title'>Acting</h3>
                        {
                            cast.map(el =>
                                <div className='list_item' key={el.id}>
                                    <h1>&#8722;</h1>
                                    <Link
                                        style={{ color: 'black', }}
                                        className='list_item_link' to={`/movie/${el.id}`}>{el.title}</Link>
                                </div>
                            )
                        }
                        {
                            crew.map(el =>
                                <div className='list_item' key={el.id}>
                                    <h1>&#8722;</h1>
                                    <Link
                                        style={{ color: 'black' }}
                                        className='list_item_link' to={`/movie/${el.id}`}>{el.title}</Link>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <h3 className='all_credits_title'>TV Programms</h3>
                        {
                            tvCast.map(el =>
                                <div className='list_item' key={el.id}>
                                    <h1>&#8722;</h1>
                                    <Link
                                        style={{ color: 'black', }}
                                        className='list_item_link' to={`/tv/${el.id}`}>{el.original_name}</Link>
                                </div>
                            )
                        }
                        {
                            tvCrew.map(el =>
                                <div className='list_item' key={el.id}>
                                    <h1>&#8722;</h1>
                                    <Link
                                        style={{ color: 'black' }}
                                        className='list_item_link' to={`/tv/${el.id}`}>{el.original_name}</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
        );
    } catch (error) {
        dispatch({ type: 'ERRORPERSON', payload: error.message })
    }

}

export default PersonBody;