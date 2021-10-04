import React from 'react';
// import custom stylesheet
import './Footer.css'


const Footer = () => {
    return (
        <div className="bg-footer">
         
                <h2 className="mt-3 footer-text">Make Online Payment</h2>
                <h5 className="mt-3">Please contact our office before making a payment.</h5>
               
                <img className="pe-5 mt-5" src="./pay-banner.png" alt="" />
            
            <p className="footer fs-5">© 2021 IELTS Inspection. All Right Reserved.</p>
        </div>
    );
};

export default Footer;