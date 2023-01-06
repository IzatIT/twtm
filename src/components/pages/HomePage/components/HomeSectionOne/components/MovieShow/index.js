import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

function MovieShow({ movie }) {

    const rating = Math.floor(Math.round(movie.popularity) / 10)
    return (
        <div className='movieShow_item'>
            <div className='movieShow_img_container'>
            <Link to={`/movie/${movie.id}`}>
                <img
                    className="poster_img"
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    srcSet={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}, https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
                    alt="" />

            </Link>
            <div className='movieShow_progressbar_container'>
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
                      fontSize: '20px',
                      fontWeight: '700'
                    }
                  }}
                strokeWidth={9}
                className='movieShow_progressbar' 
                value={rating} 
                text={`${rating}%`} />
            </div>
            </div>
            <div className='movieShow_text_container'>
                <h3 className='movieShow_title'>{movie.title}</h3>
                <p className='movieShow_release_date'>{movie.release_date}</p>
            </div>
        </div>
    );
}   

export default MovieShow;