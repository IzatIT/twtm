import React from 'react';
import SubmenuItem from '../SubmenuItem';
import { useSelector, useDispatch } from 'react-redux';


function MenuItem({ menuItem }) {
    const { showed } = useSelector(state => state.submenu)
    const {mode} = useSelector(state => state.mode)
    const dispatch = useDispatch()

    const handleClick = () => {
        showed === menuItem.key ?
            dispatch({ type: 'SHOW', payload: -1 })
            :
            dispatch({ type: 'SHOW', payload: menuItem.key })
    }

    return (
        <div className='menu_item'>
            <button
                onClick={handleClick}
                className='menu_title'>{menuItem.title}</button>
            {
                showed === menuItem.key ? 
                <nav className='submenu_item' style={{
                    background: mode ? 'black' : 'white'
                }}>
                    {
                        menuItem.submenu.map(submenu => <SubmenuItem submenu={submenu} key={submenu.id} />)
                    }
                </nav> : ''
            }
        </div>
    );
}

export default MenuItem;