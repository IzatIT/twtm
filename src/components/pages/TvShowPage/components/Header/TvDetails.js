import React from 'react';
import Play from '../../../../../assets/Icons/Play';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';

function TvDetails({ tvDetails, genres, crew }) {
    const rating = Math.floor(Math.round(tvDetails.popularity) / 10)
    const { language } = useSelector(state => state.language)
    console.log(tvDetails)
    return (
        <div>
            <h1 className='movie_title'>{tvDetails.name}</h1>
            <div className='movie_realese_date'>
                <p>{language === 'ru-RU' ? 'Начинался c ' : 'First air date'} {tvDetails.first_air_date} </p>

                <ul className='movie_genres'>
                    {
                        genres.map(e => <li key={e.id} className="movie_genres_item">{e.name}</li>)
                    }
                    <li className='movie_runtime'>{tvDetails.number_of_seasons} seasons</li>
                    <li className='movie_runtime'>{tvDetails.number_of_episodes} episodes</li>
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
                {
                    tvDetails.tagline && <p className='movie_tagline'>{tvDetails.tagline}</p>
                }
                {
                    tvDetails.overview && <p className='movie_overview'><span>{language === 'ru-RU' ? 'Обзор' : 'Overview'} </span> <br />{tvDetails.overview}</p>
                }
            </div>
            <div className='movie_writers'>
                <div className='movie_crew'>
                    {crew.filter((_, idx) => 0 < idx && idx <= 3).map(el => <div key={el.id}>
                        <h4>"{el.name}"</h4>
                        <p>{el.job}</p>
                    </div>)}
                </div>
                <div className='movie_crew'>
                    {crew.filter((el, idx) => 3 < idx && idx < 7).map((el, idx) => <div key={idx + el.id}>
                        <h4>{el.name}</h4>
                        <p>{el.job}</p>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default TvDetails;