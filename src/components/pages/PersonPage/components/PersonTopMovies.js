import React from 'react';
import { useSelector } from 'react-redux';
import MovieShow from '../../HomePage/components/HomeSectionOne/components/MovieShow';
import Loading from '../../../../assets/Loading';

function PersonTopMovies({ loading }) {
    const { language } = useSelector(state => state.language)
    const { personCredits } = useSelector(state => state.data)

    return (
        <div className='person_movie_credits'>
            <h4>{language === 'ru-RU' ? 'Фильмы' : 'Movies'}</h4>
            {
                <div className='person_credits_movie'>
                    {
                        personCredits && personCredits.cast &&
                        personCredits.cast.filter((e, idx) => idx < 10).map(el => <MovieShow key={el.id} movie={el} activeCategory={false} />)
                    }
                    {
                        personCredits && personCredits.crew &&
                        personCredits.crew.filter((e, idx) => idx < 10).map(el => <MovieShow key={el.id} movie={el} activeCategory={false} />)
                    }
                </div>
            }
        </div>
    );
}

export default PersonTopMovies;