import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import './servic.css';

const Servic = ({ service }) => {
    const { image, name, price, description } = service;
   const navigate = useNavigate();

   const NavigateCheckout = ()=>{
        navigate('/checkout');
   }

    return (
        <div className='mx-auto'>
            <Card className='mb-5' style={{ width: '17rem', boxShadow:'10px 10px 10px #ddd', borderRadius:'8px' }}>
                <Card.Img style={{width:'100%', height:'200px'}} className='card' variant="top" src={image} />
            
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0,80)}
                    </Card.Text>
                    <Button onClick={NavigateCheckout} variant="info">Get Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Servic;