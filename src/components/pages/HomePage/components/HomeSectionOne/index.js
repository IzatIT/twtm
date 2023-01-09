import React, { useEffect, useState } from 'react';
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from './components';
import Categories from './components/Categories';
import { getMovies } from '../../../../../assets/getMovies';
import MovieShow from './components/MovieShow';
import Loading from '../../../../../assets/Loading';

function HomeSectionOne({ section }) {
    const { error } = useSelector(state => state.error)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)
    const { active } = useSelector(state => section === 'one' ? state.activeOne : section === 'two' ? state.activeTwo : section === 'three' ? state.activeThree : '')
    const categories = getCategories(language, section)
    const [movieList, setMovieList] = useState([])

    const activeCategory = categories.filter(el => el.id === active)

    function setTitle() {
        if (language === 'ru-RU') {
            if (section === 'one') {
                return 'Что популярно'
            }
            if (section === 'two') {
                return 'Бесплатное'
            }
            if (section === 'three') {
                return 'Последние трейлеры'
            }
        }
        else if (language === 'en-US') {
            if (section === 'one') {
                return 'What\'s popular'
            }
            if (section === 'two') {
                return 'Free To Watch'
            }
            if (section === 'three') {
                return 'Latest Trailers'
            }
        }
    }





    const getDatas = async () => {
        setLoading(true)
        try {
            await getMovies(activeCategory[0].category, activeCategory[0].subcategory, language, section === 'one' ? '&page=1' : '&page=3')
                .then(data => setMovieList(data))

        } catch (e) {
            dispatch({ type: 'ERROR', payload: e.message })
        }
        setLoading(false)
    }
    const title = setTitle()

    useEffect(() => {
        getDatas()
    }, [active, language])



    return (
        <div>
            {
                loading && error !== '' ?
                    <div className='loading_container'>
                        <Loading />
                    </div>
                    :
                    <section className='home_section'
                        style={{
                            color: mode ? 'white' : 'black'
                        }}>
                        <header className='home_section_header'>
                            <h1 className='home_section_title'>
                                {title}
                            </h1>
                            <nav className='home_categories'>
                                {
                                    categories ?
                                        categories.map(category => <Categories section={section} key={category.id} category={category} />)
                                        :
                                        <div className='loading_container'>
                                            <Loading />
                                        </div>
                                }
                            </nav>
                        </header>
                        <div className='categories_movies'>
                            {
                                movieList ?
                                    movieList.map(movie => <MovieShow section={section} activeCategory={activeCategory} key={movie.id} movie={movie} />)
                                    :
                                    <div>
                                        <Loading />
                                    </div>
                            }
                        </div>
                    </section>
            }
        </div>

    );
}

export default HomeSectionOne;