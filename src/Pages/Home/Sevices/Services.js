import React, { useEffect, useState } from 'react';
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
        <div className='mt-5'>
            <h2 className='services-title'>My Service</h2>
            <div className='service-container'>
                {
                    services.map(service => <Servic
                        key={service.id}
                        service={service}></Servic>)
                }
            </div>


        </div>
    );
};

export default Services;