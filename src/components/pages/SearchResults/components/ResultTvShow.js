import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ResultTvShow({ tvShow }) {
    const {language} = useSelector(state => state.language)
    return (
        <div className='found_people_item'>
            <Link to={`/tv/${tvShow.id}`}>
                <img className='found_tvshow_img' src={`https://www.themoviedb.org/t/p/w440_and_h660_bestv2/${tvShow.poster_path}`} alt="Image not available" />
            </Link>
            <div className='found_tvShow_text'>
                <h1>{tvShow.original_name}</h1>
                <p>{tvShow.first_air_date}</p>
            </div>
        </div>
    );
}

export default ResultTvShow