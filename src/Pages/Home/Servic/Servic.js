import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './servic.css';

const Servic = ({ service }) => {
    const { image, name, price, description } = service;
   const navigate = useNavigate();

   const NavigateCheckout = ()=>{
       navigate('/checkout');
   }

    return (
        <div className='mx-auto'>
            <Card style={{ width: '17rem' }}>
                <Card.Img style={{width:'100%', height:'200px'}} className='card' variant="top" src={image} />
            
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0,100)}
                    </Card.Text>
                    <Button onClick={NavigateCheckout} variant="info">Get Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Servic;