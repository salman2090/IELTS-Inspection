import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {name, price, img, text} = props.service;

    return (
        <div className="service">
            <CardGroup>
            <Card className="m-5 mt-5 card-bg shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top " className="mt-3 rounded-circle border border-1 border-dark" src={img} />
                <Card.Body>
                   <h3>{name}</h3>
                   <br />
                   <h4>Fee: {price} Taka</h4>
                   <br />
                   <hr />
                   <h5 className="p-3">{text}</h5>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Service;