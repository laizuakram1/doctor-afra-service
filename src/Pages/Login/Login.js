import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';



import SocialLink from '../../Shared/SocialLink/SocialLink';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    console.log(email, password);

    const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    
    const handleCreateUser = (event)=>{
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <Form onSubmit={handleCreateUser}>
                <h2 className='form-title'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='form-toggle'>Don't have an account?<Link to='/signUp'>SignUp</Link></p>
               <SocialLink></SocialLink>
            </Form>
        </div>
    );
};

export default Login;