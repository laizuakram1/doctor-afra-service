import React from 'react';
import { Button } from 'react-bootstrap';
import './CheckoutList.css';

const CheckoutList = ({ service }) => {
    const { image, name, price } = service;
    return (
        <div>
            <div className='checkList'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <span>{name}</span>
                </div>

            </div>
        </div>
    );
};

export default CheckoutList;