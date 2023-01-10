import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIVE_CATEGORY_ONE, ACTIVE_CATEGORY_THREE, ACTIVE_CATEGORY_TWO } from '../../../../../../../redux/store/actions';

function Categories({ category, section}) {
    const active= useSelector(state => section === 'one' ?  state.activeCategory.activeOne : section === 'two' ? state.activeCategory.activeTwo : section === 'three' ? state.activeCategory.activeThree : '')
    const dispatch = useDispatch()
    const {mode} = useSelector(state => state.mode)

    const handleClick = () => {
        dispatch({ type: section === 'one' ? ACTIVE_CATEGORY_ONE : section === 'two' ?  ACTIVE_CATEGORY_TWO: section === 'three' ? ACTIVE_CATEGORY_THREE : '', payload: category.id   })
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