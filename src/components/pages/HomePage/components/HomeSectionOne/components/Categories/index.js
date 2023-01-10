import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Categories({ category, section}) {
    const { active } = useSelector(state => section === 'one' ?  state.activeOne : section === 'two' ? state.activeTwo : section === 'three' ? state.activeThree : '')
    const dispatch = useDispatch()
    const {mode} = useSelector(state => state.mode)

    const handleClick = () => {
        dispatch({ type: section === 'one' ? "ACTIVEONE" : section === 'two' ?  'ACTIVETWO': section === 'three' ? 'ACTIVETHREE' : '', payload: category.id   })
    }
    return (
        <button
        style={{
            color: mode ? 'white' : 'black'
        }}
            onClick={handleClick}
            className={`home_category_item ${active === category.id && 'active_category'}`}><span>{category.title}</span></button>

    );
}

export default Categories;