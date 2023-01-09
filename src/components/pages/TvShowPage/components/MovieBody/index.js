import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Facebook from '../../../../../assets/Icons/Facebook';
import Instagram from '../../../../../assets/Icons/Instagram';
import Twitter from '../../../../../assets/Icons/Twitter';
import PersonCard from '../../../PersonCard';
import { getMovies } from '../../../../../assets/getMovies';
import ErrorPage from '../../../ErrorPage';

function TvBody({ cast, tvDetails, showId, error }) {
    const [socialMedia, setSocialMedia] = useState([])
    const { language } = useSelector(state => state.language)

    useEffect(() => {
        getMovies('tv', showId + '/external_ids', language)
            .then(data => {
                setSocialMedia(data)
            })
    }, [])
    return (
        <section className='movie_body'>
            <div className='container'>
                {
                    error ?
                        <ErrorPage />
                        :
                        <div className='movie_body'>
                            {
                                cast[0] &&
                                <div className='movie_body_left'>

                                    <h1 className='starring_title'>{language === 'ru-RU' ? 'В главных ролях' : 'Starring'}</h1>
                                    <div className='movie_starring'>
                                        {
                                            cast.filter((el, idx) => idx < 20).map(el => <PersonCard key={el.id} person={el} />)
                                        }
                                    </div>
                                </div>
                            }


                            <div className='movie_body_right'>
                                <nav className='movie_extarnals'>
                                    <a className='movie_social' target='_blank' href={`https://www.facebook.com/${socialMedia.facebook_id}`}><Facebook /></a>
                                    <a className='movie_social' target='_blank' href={`https://twitter.com/${socialMedia.twitter_id}`}><Twitter /></a>
                                    <a className='movie_social' target='_blank' href={`https://www.instagram.com/${socialMedia.wikidata_id}`}><Instagram /></a>
                                </nav>
                                <div className='movie_extra_info'>
                                    <div className='extra_info_item'>
                                        <h3>{language === 'ru-RU' ? 'Исходное название' : 'Original title'}</h3>
                                        <p>{tvDetails.original_name}</p>
                                    </div>
                                    <div className='extra_info_item'>
                                        <h3>{language === 'ru-RU' ? 'Статус' : 'Status'}</h3>
                                        <p>{tvDetails.status}</p>
                                    </div>
                                    <div className='extra_info_item'>
                                        <h3>{language === 'ru-RU' ? 'Исходный язык' : 'Original language'}</h3>
                                        <p>{tvDetails.original_language}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </section>
    );
}

export default TvBody;