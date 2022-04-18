import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';



import SocialLink from '../../Shared/SocialLink/SocialLink';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    

    const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    
    let from = location.state?.from?.pathname || '/';
    
    if(user){
        navigate(from, {replace:true});
    }
   


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    
    const handleCreateUser = (event)=>{
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
        if(password.length < 6){
            setError('password must 6 digit or more');
        }
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
                    <p className='text-danger'>{error}</p>
                <Button variant="dark" type="submit">
                    Login
                </Button>
                <p className='form-toggle'>Don't have an account?<Link to='/signUp'>SignUp</Link></p>
               <SocialLink></SocialLink>
            </Form>
        </div>
    );
};

export default Login;