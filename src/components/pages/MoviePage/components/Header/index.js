import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ERROR_MOVIE } from '../../../../../redux/store/actions';
import MovieDetails from './MovieDetails';

function MovieHeader() {
    const dispatch = useDispatch()
    const {movieDetails} = useSelector(state => state.data)
    
    try {
        return (
            <div>
               
                <section
                    style={{
                        backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}`})`
                    }}
                    id='movie'>
                    <div className='movie_filter'>
                        <div className='container'>
                            <div className='movie'>
                                <header className='movie_header'>
                                    <div className='movie_left_container'>
                                        <img
                                            className="movie_poster_path"
                                            src={`https://www.themoviedb.org/t/p/w440_and_h660_bestv2/${movieDetails.poster_path}`}
                                            alt="" />
                                    </div>
                                    <div className='movie_right_container'>
                                        <MovieDetails />
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        );
    } catch (error) {
        dispatch({ type: ERROR_MOVIE, payload: error.message })

    }

}

export default MovieHeader;