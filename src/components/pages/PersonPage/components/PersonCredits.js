import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleClickScroll } from '../../../../assets/handleClickScroll';

function PersonCredits() {
    const { personCredits } = useSelector(state => state.data)
    const { mode } = useSelector(state => state.mode)
    const { language } = useSelector(state => state.language)

    return (
        <div>
            <h3 className='all_credits_title'>{language === 'ru-RU' ? 'Актёрство' : 'Acting'} </h3>
            {
                personCredits && personCredits.cast &&
                personCredits.cast.map(el =>
                    <div className='list_item' key={el.id}>
                        <h1>&#8722;</h1>
                        <Link
                            onClick={handleClickScroll}
                            style={{ color: mode ? 'white' : 'black', }}
                            className='list_item_link' to={`/movie/${el.id}`}>{el.title}</Link>
                    </div>
                )
            }
            {
                personCredits && personCredits.crew &&
                personCredits.crew.map(el =>
                    <div className='list_item' key={el.id}>
                        <h1>&#8722;</h1>
                        <Link
                            style={{ color: mode ? 'white' : 'black' }}
                            className='list_item_link' to={`/movie/${el.id}`}>{el.title}</Link>
                    </div>
                )
            }
        </div>
    );
}

export default PersonCredits;