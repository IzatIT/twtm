import React from 'react';
import './style.css'
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.svg'
function Footer() {
    const { language } = useSelector(state => state.language)
    const {mode} = useSelector(state => state.mode)
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer_left'>
                        <img className='footer_logo' src={logo} alt="" />
                        <button className='footer_btn' style={{
                            background: mode ? 'black' : 'white'
                        }}>
                        {language === 'ru-RU' ? 'Привет, друг!' : 'Hello, friend'}
                        </button>
                    </div>
                    <div className='footer_right'>
                        <div className='footer_items'>
                            <h1 className='footer_links_title'>{language === 'ru-RU' ? 'Главное' : 'The Basics'}</h1>
                            <nav className='footer_links_container'>
                                <a href="https://www.themoviedb.org/about">{language === 'ru-RU' ? 'О TMDB' : 'About TMDB'}</a>
                                <a href="https://www.themoviedb.org/about/staying-in-touch">{language === 'ru-RU' ? 'Связаться с нами' : 'Contact Us'}</a>
                                <a href="https://www.themoviedb.org/talk">{language === 'ru-RU' ? 'Форумы поддержки' : 'Support Forums '}</a>
                                <a href="https://www.themoviedb.org/documentation/api">{language === 'ru-RU' ? 'API' : 'API'}</a>
                                <a href="https://status.themoviedb.org/">{language === 'ru-RU' ? 'Статус системы' : 'System Status'}</a>
                            </nav>
                        </div>
                        <div className='footer_items'>
                            <h1 className='footer_links_title'>{language === 'ru-RU' ? 'Участвуйте' : 'Get Involved'}</h1>
                            <nav className='footer_links_container'>
                                <a href="https://www.themoviedb.org/bible">{language === 'ru-RU' ? 'Писание об участии' : 'Contribution Bible'}</a>
                                <a href="https://www.themoviedb.org/movie/new">{language === 'ru-RU' ? 'Добавить новый фильм' : 'Add New Movie'}</a>
                                <a href="https://www.themoviedb.org/tv/new">{language === 'ru-RU' ? 'Добавить новый сериал' : 'Add New TV Show'}</a>
                            </nav>
                        </div>
                        <div className='footer_items'>
                            <h1 className='footer_links_title'>{language === 'ru-RU' ? 'Сообщество' : 'Community'}</h1>
                            <nav className='footer_links_container'>
                                <a href="https://www.themoviedb.org/documentation/community/guidelines">{language === 'ru-RU' ? 'Руководства' : 'Guidelines'}</a>
                                <a href="https://www.themoviedb.org/discuss">{language === 'ru-RU' ? 'Обсуждения' : 'Discussions'}</a>
                                <a href="https://www.themoviedb.org/leaderboard">{language === 'ru-RU' ? 'Доска почёта' : 'Leaderboard'}</a>
                                <a href="https://twitter.com/themoviedb">{language === 'ru-RU' ? 'Twitter' : 'Twitter'}</a>
                            </nav>
                        </div>
                        <div className='footer_items'>
                            <h1 className='footer_links_title'>{language === 'ru-RU' ? 'О праве' : 'Legal'}</h1>
                            <nav className='footer_links_container'>
                                <a href="https://www.themoviedb.org/terms-of-use">{language === 'ru-RU' ? 'Условия использования' : 'Terms of Use'}</a>
                                <a href="https://www.themoviedb.org/documentation/api/terms-of-use">{language === 'ru-RU' ? 'API Правила использования' : '    API Terms of Us'}</a>
                                <a href="https://www.themoviedb.org/privacy-policy">{language === 'ru-RU' ? '    Политика конфиденциальности' : 'Privacy Policy'}</a>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;