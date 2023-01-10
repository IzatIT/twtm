import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleClickScroll } from '../../../../assets/handleClickScroll';

function PersonTvCredits() {
    const { personTvCredits } = useSelector(state => state.data)
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)



    return (
        <div>
            <h3 className='all_credits_title'>{language === 'ru-RU' ? 'ТВ программы' : 'TV Programms'}</h3>
            {
                personTvCredits && personTvCredits.cast &&
                personTvCredits.cast.map(el =>
                    <div className='list_item' key={el.id}>
                        <h1>&#8722;</h1>
                        <Link
                            onClick={handleClickScroll}
                            style={{ color: mode ? 'white' : 'black', }}
                            className='list_item_link' to={`/tv/${el.id}`}>{el.original_name}</Link>
                    </div>
                )
            }
            {
            personTvCredits && personTvCredits.crew &&
                personTvCredits.crew.map(el =>
                    <div className='list_item' key={el.id}>
                        <h1>&#8722;</h1>
                        <Link
                            onClick={handleClickScroll}
                            style={{ color: mode ? 'white' : 'black' }}
                            className='list_item_link' to={`/tv/${el.id}`}>{el.original_name}</Link>
                    </div>
                )
            }
        </div>
    );
}

export default PersonTvCredits;