import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLink from '../../Shared/SocialLink/SocialLink';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



const SignUp = () => {
    const emailRef = useRef('');
const passwordRef = useRef('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);


    const handleLoginForm = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <Form onSubmit={handleLoginForm}>
                <h2 className='form-title'>SignUp</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
                <p className='form-toggle'>Already have an account?<Link to='/login'>Login</Link></p>

                <SocialLink></SocialLink>
            </Form>
        </div>
    );
};

export default SignUp;