import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Servic from '../Servic/Servic';
import './Services.css';


const Services = () => {
    const [services, setSetvices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setSetvices(data))
    }, [])

    return (
        <div className='services'>
            <h2 className='text-center py-4'>My Service</h2>
            <div className='service-container'>
                {
                    services.map(service => <Servic
                        key={service.id}
                        service={service}></Servic>)
                }
            </div>

                <Footer></Footer>
        </div>
    );
};

export default Services;