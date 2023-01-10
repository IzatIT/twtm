import React from 'react';
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { menuList } from './components';
import MenuItem from './components/MenuItem';
import { Link } from 'react-router-dom';
import { LANGUAGE_CHANGE, MODE_CHANGE } from '../../redux/store/actions';

function Header() {
    const { language } = useSelector(state => state.language)
    const { mode } = useSelector(state => state.mode)
    const menu = menuList(language)
    const dispatch = useDispatch()

    const handleChange = (element) => {
        dispatch({ type: LANGUAGE_CHANGE, payload: element.target.value })
    }


     const handleClick = () => {
        dispatch({ type: MODE_CHANGE })
    }

    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                    <div className='header_left'>
                        <Link to='/twtm' className='header_logo'>
                            <h1>TWTM</h1>
                            <div></div>
                        </Link>
                        <nav className='header_nav'>
                            {
                                menu.map(menuItem => <MenuItem menuItem={menuItem} key={menuItem.id} />)
                            }
                        </nav>
                    </div>
                    {/* =================================================*/}
                    <div className='header_right'>
                        <select
                            className='language_changer'
                            onChange={handleChange}
                        >
                            <option value="ru-RU" key="ru">RU</option>
                            <option value="en-US" key="en">EN</option>

                        </select>

                        {/* =================================================*/}
                        <button
                            onClick={handleClick}
                            className='mode_container'
                            style={{
                                background: mode ? 'wheat' : '#272727',
                                border: `1px solid ${mode || 'wheat'}`,
                                justifyContent: mode ? 'flex-end' : 'flex-start',
                            }}
                        ><div
                            style={{
                                background: mode ? '#272727' : 'wheat'
                            }}
                        ></div></button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;