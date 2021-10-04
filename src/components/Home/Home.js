import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const[services, setServices] = useState([]);

    useEffect( () => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,4)));
    },[]);
  
    return (
        <div className="bg">
            <img className="w-100 h-75 " src="./home-banner.png" alt="" />
            
            <div className="heading mt-5 mb-3">
                <h1>Welcome to <span className="heading-text">IELTS Inspection</span></h1>
            </div>
            <h5>Take positive steps toward achieving your dream with us, and feel better about yourself and your ambition.</h5>
            <img className="w-100 mt-5" src="./home-banner-2.png" alt="" />
            <div className="services-container">
            <h1 className="mt-5">Checkout our services</h1>
            
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            </div>

            <div>
                <h2 className="feedback-heading">Our Happy Students</h2>
                <div className="card-display">
                <Card className="card-decoration shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
                    <Card.Body> 

                        <p className="text-center">HI!</p>
                        <p>I would suggest everyone to visit IELTS Inspection if you are planning to study abroad. If even you are doing the process yourself, you should visit Mentors’ and take their advice.</p><br />
                        
                        <h6>NAZMUN NAHAR MISTI</h6>
                        <Card.Subtitle className="mb-2 text-muted">University of Bridgeport</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card className="card-decoration shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
                    <Card.Body> 
                        
                        <p className="text-center">Hello!</p>
                        
                        <p>In a word IELTS Inspection has the best environment and equipment to assist a student with everything he needs to get admitted at a foreign school and get the visa.</p><br />
                        
                        <h6>MIR AFTAB UDDIN</h6>
                        <Card.Subtitle className="mb-2 text-muted">University of Windsor</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card className="card-decoration shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
                    <Card.Body> 
                        
                        <p className="text-center">Hey there!</p>
                        <p>I would suggest everyone to visit Mentors’ if you are planning to study abroad. If even you are doing the process yourself, you should visit IELTS Inspection and take their advice.</p><br />
                        
                        <h6>SABBIR AHMED SAZAL</h6>
                        <Card.Subtitle className="mb-2 text-muted">Curtin University Malaysia</Card.Subtitle>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;