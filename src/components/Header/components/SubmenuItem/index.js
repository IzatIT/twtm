import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SubmenuItem({ submenu }) {


    return (
        <div className='submenu'>
            <Link  to="/twtm" className='submenu_link'>{submenu.title}</Link>
        </div>
    );
}

export default SubmenuItem;