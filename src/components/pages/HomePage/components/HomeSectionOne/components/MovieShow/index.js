import axios from 'axios';
import React, { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import placeholderImage from '../../../../../../../assets/images/placeholderMovie.png'

function MovieShow({ movie, activeCategory }) {

  const category = activeCategory === false ? 'movie' : activeCategory[0].category

  const rating = Math.floor(Math.round(movie.popularity) / 10)



  return (
    <div>
      {
        rating > 1 &&
        <div className='movieShow_item'>
          <div className='movieShow_img_container'>
            <Link to={`/${category}/${movie.id}`}>
              <img
                className="poster_img"
                loading='lazy'
                width={150}
                height={225}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                alt='Image not available' />

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
      }
    </div>
  );
}

export default MovieShow;