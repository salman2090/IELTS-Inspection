import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="bg">
            <div className="header">
                <h1 className="fw-bold">Explore Us</h1>
            </div>
            <div className="about-body">
                <h2 className="mt-5 mb-3 fw-bold border border-white rounded text-center p-3 ">Why choosing <span className="text-coloring">IELTS Inspection?</span> </h2>
                {/* <h4>We build connections, understanding and trust between people throughout the world with the English language.</h4> */}

                <p className="fs-4">We provide the guidance and we were nominated the best IELTS coaching in Dhaka with excellent success records. We offer the IELTS courses Our courses by highly experienced experts qualified from United Kingdom and Australia. NextStep offers bespoke IELTS coaching in Dhaka with personalized feedback.</p><br />

                <p className="fs-4">Moreover, we run very small batch (maximum 10 in online class and 12 in face to face class)  to provide one to one feedback. We offer different types of IELTS courses according students’ strength and availability . We offer best interactive online IELTS courses in Bangladesh. </p>
                
            </div>
        </div>
    );
};

export default About;