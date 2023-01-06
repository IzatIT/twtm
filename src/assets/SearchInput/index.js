import React from 'react';
import { useSelector } from 'react-redux';

function SearchInput() {
    const {language} = useSelector(state => state.language)


    return ( 
        <div className='home_search'>
            <input className='home_search_input' type="search" 
            placeholder={language === 'ru-RU' ? 'Найти фильм, сериал, персону.....' 
            : 'Search for a movie, tv shows, person.....'}/>
            <button className='home_search_btn'>{language === 'ru-RU' ? 'Искать' : 'Search'}</button>
        </div>
     );
}

export default SearchInput;