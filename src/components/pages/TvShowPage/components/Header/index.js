import React from 'react';
import TvDetails from './TvDetails';

function TvHeader({ genres, tvDetails, crew }) {

    return (
        <div>
            <section
                style={{
                    backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${tvDetails.backdrop_path}`})`
                }}
                id='movie'>
                <div className='movie_filter'>
                    <div className='container'>
                        <div className='movie'>
                            <header className='movie_header'>
                                <div className='movie_left_container'>
                                    <img
                                        className="movie_poster_path"
                                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${tvDetails.poster_path}`}
                                        // srcSet={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}, https://www.themoviedb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}`}
                                        alt="" />
                                </div>
                                <div className='movie_right_container'>
                                        <TvDetails tvDetails={tvDetails} crew={crew} genres={genres} />
                                </div>
                            </header>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default TvHeader;