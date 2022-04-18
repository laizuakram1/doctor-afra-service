import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import CheckoutList from '../CheckoutList/CheckoutList';
import './Checkout.css';

const Checkout = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className='container checklist-container'>
             {
                    services.map(service => <CheckoutList
                        key={service.id}
                        service={service}
                    ></CheckoutList>)
                }
                <Footer></Footer>
        </div>
    );
};

export default Checkout;