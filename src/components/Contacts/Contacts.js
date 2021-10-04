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