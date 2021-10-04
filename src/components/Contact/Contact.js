import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Contact.css'

//import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle, faPhone, faIdCard, faLocationArrow, faVoicemail, faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
    const {name, location, phone, email} = props.contact;
   
    // icon info
    
    const locationIcon = <FontAwesomeIcon icon={faLocationArrow} />
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const emailIcon = <FontAwesomeIcon icon={faMailBulk} />

    return (    
        <div className="contact">
            <CardGroup>
            <Card className="m-5 mt-5 card-bg shadow p-3 mb-5 bg-body rounded">
                <Card.Body>
                   <h2>{name}</h2>
                   <br /><br />
                   <h5><span>{locationIcon}</span>{' '}&emsp;{location}</h5>
                   <br /><br />
                   <h5><span>{phoneIcon}</span>{' '}&emsp;{phone}</h5>
                   <br />
                   <h5><span>{emailIcon}</span> {email}</h5>
                        
                  
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Contact;