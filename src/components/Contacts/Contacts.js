import React from 'react';
// import react hooks
import { useState } from 'react';
import { useEffect } from 'react';
// import component
import Contact from '../Contact/Contact';
// import custom stylesheet
import './Contacts.css'

const Contacts = () => {
    const[contacts, setContacts] = useState([]);
   
    // load data
    useEffect( () => {
        fetch('./contacts.json')
            .then(res => res.json())
            .then(data => setContacts(data));
    },[]);

    return (
        // sending single service
        <div className="contacts-container">
            <img className="mx-auto mt-3 img-fluid" src="./contact-banner.gif" alt="" />
            <h1 className="mt-5 header-text">Get in touch with us</h1>    

            <div className="contact-container">
                {
                    contacts.map(contact => <Contact
                        key={contact.key}
                        contact={contact}
                    ></Contact>
                    )
                }
            </div>

        </div>
    );
};

export default Contacts;