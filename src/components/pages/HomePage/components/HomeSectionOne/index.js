import React, { useEffect, useState } from 'react';
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from './components';
import Categories from './components/Categories';
import { getMovies } from '../../../../../assets/getMovies';
import MovieShow from './components/MovieShow';
import Loading from '../../../../../assets/Loading';
import { ADD_HOME_DATA_ONE, ADD_HOME_DATA_THREE, ADD_HOME_DATA_TWO, ERROR_GEN } from '../../../../../redux/store/actions';

function HomeSectionOne({ section }) {
    const [loading, setLoading] = useState(false)
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)
    const { homeDataOne, homeDataTwo, homeDataThree } = useSelector(state => state.data)
    const { activeOne, activeTwo, activeThree } = useSelector(state => state.activeCategory)
    const categories = getCategories(language, section)
    const dispatch = useDispatch()
    const active = section === 'one' ? activeOne : section === 'two' ? activeTwo : section === 'three' ? activeThree : ''
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
        try {
            await getMovies(activeCategory[0].category, activeCategory[0].subcategory, language, section === 'one' ? '&page=1' : '&page=3')
                .then(data => {
                    dispatch({ type: section === 'one' ? ADD_HOME_DATA_ONE : section === 'two' ? ADD_HOME_DATA_TWO : section === 'three' ? ADD_HOME_DATA_THREE : '', payload: data })
                })
            dispatch({ type: ERROR_GEN, payload: '' })
        }
        catch (e) {
            dispatch({ type: ERROR_GEN, payload: e.message })
        }
    }
    const title = setTitle()

    useEffect(() => {
        setLoading(true)
        getDatas()
        setTimeout(() => setLoading(false), 3000)
    }, [active, language])

    try {
        return (
            <div>
                {
                    loading ?
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
                                <nav className='home_categories' style={{
                                    borderColor: mode ? 'aqua' : 'black'
                                }}>
                                    {
                                        categories.map(category => <Categories section={section} key={category.id} category={category} />)
                                    }
                                </nav>
                            </header>
                            {
                                <div className='categories_movies'>
                                    {
                                        section === 'one' ?
                                            homeDataOne.map(movie => <MovieShow activeCategory={activeCategory} key={movie.id} movie={movie} />)
                                            :
                                            section === 'two' ?
                                                homeDataTwo.map(movie => <MovieShow activeCategory={activeCategory} key={movie.id} movie={movie} />)
                                                :
                                                section === 'three' ?
                                                    homeDataThree.map(movie => <MovieShow activeCategory={activeCategory} key={movie.id} movie={movie} />)
                                                    :
                                                    ''
                                    }
                                </div>
                            }
                        </section>
                }
            </div>

        );
    }
    catch (e) {
        dispatch({ type: ERROR_GEN, payload: e.message })
    }



}

export default HomeSectionOne;