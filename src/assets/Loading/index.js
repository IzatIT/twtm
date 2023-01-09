import React from 'react';
import { useSelector } from 'react-redux';
import ErrorPage from '../../components/pages/ErrorPage';
import './style.css'

function Loading() {
    const { error } = useSelector(state => state.error)

    return (
        <div>
            {
                error !== '' ?
                    setTimeout(() => <ErrorPage />, 5000)
                    :
                    <div div className="lds-hourglass" ></div>

            }
        </div>

    );
}

export default Loading;