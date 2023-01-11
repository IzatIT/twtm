import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function ResultMovie({ movie }) {
    const {mode} = useSelector(state => state.mode)
    const screen = window.innerWidth
    return (
        <div className='found_movie_item'>
            <Link className='found_movie_img' to={`/movie/${movie.id}`}>
           
                <img className='found_movie_img' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />
            </Link>
            <div className='found_movie_text'>
                <h1 className='found_movie_title'
                    style={{
                        fontSize: movie.title.length > 14 ? '15px' : '18px'
                    }}
                >{movie.title}</h1>
                <p className='found_movie_release_date'>{movie.release_date}</p>
                <p className='found_movie_overview'> {screen > 700 ? movie.overview.slice(0, 160) : movie.overview.slice(0, 50)} ....</p>
            </div>
        </div>
    );
}

export default ResultMovie