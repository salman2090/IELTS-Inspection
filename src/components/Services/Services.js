import React from 'react';
// import hooks
import { useEffect } from 'react';
import { useState } from 'react';
// import components
import Service from '../Service/Service';
// import custom stylesheet
import './Services.css'

const Services = () => {
    const[services, setServices] = useState([]);

    // load data
    useEffect( () => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[]);

    return (
        <div className="services-container">
            <h2 className="mt-5">Checkout our services</h2>
            
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;