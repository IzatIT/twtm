import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
    const {language} = useSelector(state => state.language)
    const {mode} = useSelector(state => state.mode)
    const {inputValue} = useSelector(state => state.inputValue)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        dispatch({type:'INPUTCHANGE', payload: e.target.value})
    }

    const handleClick = () => {
        if(inputValue !== ''){
            navigate(`/search/${inputValue}`)
        }
    }


    return (
        <div className='home_search'>
            <input
            style={{
                background: mode ? 'black' : 'white',
                color: 'white',
                boxShadow: mode ? '0 0 1px 1px aqua, 0 0 2px 1px aqua, 0 0 3px 1px aqua' : ''
            }}
            onChange={handleChange}
            className='home_search_input' type="search" 
            placeholder={language === 'ru-RU' ? 'Найти фильм, сериал, персону.....' 
            : 'Search for a movie, tv shows, person.....'}/>
            <button
            onClick={handleClick}
            className='home_search_btn'>{language === 'ru-RU' ? 'Искать' : 'Search'}</button>
        </div>
     );
}

export default SearchInput;