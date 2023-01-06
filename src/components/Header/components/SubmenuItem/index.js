import React from 'react';
import { Link } from 'react-router-dom';

function SubmenuItem({ submenu }) {
    return (
        <div className='submenu'>
            <Link  to="/" className='submenu_link'>{submenu.title}</Link>
        </div>
    );
}

export default SubmenuItem;