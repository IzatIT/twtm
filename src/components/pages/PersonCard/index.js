import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function PersonCard({ person }) {

    return (
        <div className='personCard'>
            <Link to={`/actor/${person.id}/`}>
                {
                    <img className='personCard_img' loading='lazy' width={130} height={195} src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${person.profile_path}`} alt="Image not available" />
                }
            </Link>
            <div>
                <h5 className='personCard_name'>{person.name}</h5>
                <p className='personCard_charackter'>{person.character}</p>

            </div>
        </div>
    );
}

export default PersonCard;