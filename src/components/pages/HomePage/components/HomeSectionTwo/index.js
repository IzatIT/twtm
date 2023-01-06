import React, { useEffect, useState } from 'react';
import './style.css'
import { getMovies } from '../../../../../assets/getMovies';
import { useSelector } from 'react-redux';

function HomeSectionTwo() {
    const { language } = useSelector(state => state.language)
    const [movie, setMovie] = useState({})

    return (
        <div></div>
    );
}

export default HomeSectionTwo;