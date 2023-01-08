import React from 'react';
import { Link } from 'react-router-dom';

function ResultPeople({ people }) {
    return (
        <div className='found_people_item'>
            <Link to={`/actor/${people.id}`}>
                <img className='found_people_img' src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${people.profile_path}`} alt="Image not available" />
            </Link>
            <div>
                <h1>{people.name}</h1>
            </div>
        </div>
    );
}

export default ResultPeople