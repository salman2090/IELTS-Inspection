import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Contact from '../Contact/Contact';
import './Contacts.css'

const Contacts = () => {
    const[contacts, setContacts] = useState([]);
   

    useEffect( () => {
        fetch('./contacts.json')
            .then(res => res.json())
            .then(data => setContacts(data));
    },[]);

    return (
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