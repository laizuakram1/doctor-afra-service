import React from 'react';
import './NotFound.css';
import notFoundImg from '../../images/pageNotFound.jpg';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;