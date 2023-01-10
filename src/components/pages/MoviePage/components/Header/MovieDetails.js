import React from 'react';
import Play from '../../../../../assets/Icons/Play';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR_MOVIE } from '../../../../../redux/store/actions';

function MovieDetails() {
    const { movieDetails } = useSelector(state => state.data)
    const { crew } = useSelector(state => state.data.movieCredits)
    const rating = Math.floor(Math.round(movieDetails.popularity) / 10)
    const { language } = useSelector(state => state.language)
    const dispatch = useDispatch()

    try {
        return (
            <div>
                <h1 className='movie_title'>{movieDetails.title}</h1>
                <div className='movie_realese_date'>
                    <p>{movieDetails.release_date}</p>

                    <ul className='movie_genres'>
                        {
                            movieDetails?.genres.map(e => <li key={e.id} className="movie_genres_item">{e.name}</li>)
                        }
                        <li className='movie_runtime'>{movieDetails.runtime} minute</li>
                    </ul>

                </div>
                <div className='movie_rating'>
                    <div className='movie_rating_item'>
                        <div className='movie_rating_container'>
                            <CircularProgressbar
                                styles={{
                                    path: {
                                        stroke: rating > 70 ? 'green' : rating > 50 ? 'yellow' : 'orange',
                                        transition: 'stroke-dashoffset 2s ease 1s',
                                    },
                                    trail: {
                                        stroke: 'rgb(1, 33, 53)',
                                    },
                                    text: {
                                        fill: 'white',
                                        fontSize: '25px',
                                        fontWeight: '700'
                                    }
                                }}
                                strokeWidth={9}
                                className='movieShow_progressbar'
                                value={rating}
                                text={`${rating}%`} />
                        </div>
                        <p>{language === 'ru-RU' ? 'Популярность' : 'Popularity'}</p>
                    </div>
                    <button className='movie_btn'><Play />{language === 'ru-RU' ? ' Воспроизвести трейлер' : 'Play trialer'}</button>
                </div>
                <div className='movie_text'>
                    <p className='movie_tagline'>{movieDetails.tagline}</p>
                    <p className='movie_overview'><span>{language === 'ru-RU' ? 'Обзор' : 'Overview'} </span> <br />{movieDetails.overview}</p>
                </div>
                <div className='movie_writers'>
                    <div className='movie_crew'>
                        {crew.filter((e, idx) => 0 < idx && idx <= 3).map((el, idx) => <div key={el.id}>
                            <h4>"{el.name}"</h4>
                            <p>{el.job}</p>
                        </div>)}
                    </div>
                    <div className='movie_crew'>
                        {crew.filter((el, idx) => 3 < idx && idx < 7).map((el, idx) => <div key={1 + el.id}>
                            <h4>{el.name}</h4>
                            <p>{el.job}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        dispatch({ type: ERROR_MOVIE, payload: error.message })

    }

}

export default MovieDetails;