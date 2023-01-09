import React, { useState, useEffect } from 'react';
import './style.css'
import { useSelector } from 'react-redux';
import SearchInput from '../../../assets/SearchInput';
import HomeSectionOne from './components/HomeSectionOne';
import bgImage from '../../../assets/images/background.jpg'
import ErrorPage from '../ErrorPage';
function HomePage() {
    const { language } = useSelector(state => state.language)
    const { error } = useSelector(state => state.error)

    return (
        <div id='home_gen'>
            {
                error === '' ?
                    <>
                        <section id='home' style={{
                            backgroundImage: `url('${bgImage}')`
                        }}>
                            <div className='container'>
                                <div className='home'>
                                    <div className='home_title'>
                                        <h1>{language === 'ru-RU' ? 'Добро пожаловать.' : 'Welcome.'}</h1>
                                        <h2>{language === 'ru-RU' ?
                                            'Миллионы фильмов, сериалов и людей. Исследуйте сейчас.'
                                            : ' Millions of movies, TV shows and people to discover. Explore now.'}</h2>
                                    </div>
                                    <SearchInput />
                                </div>
                            </div>
                        </section>
                        <section id='home'>
                            <div className='container'>
                                {
                                    <div className='home_section'>
                                        <HomeSectionOne section="one" />
                                        <HomeSectionOne section="two" />
                                    </div>
                                }
                            </div>
                        </section>
                    </>
                    :
                    <div className='error_container'>
                        <ErrorPage />
                    </div>
            }
        </div>



    )
}

export default HomePage;