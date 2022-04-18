import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail,useSendEmailVerification  } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SocialLink from '../../Shared/SocialLink/SocialLink';
import auth from '../../firebase.init';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');




    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth,);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);
      
        

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else toast('please type Email')    }

    const emailVerification = async ()=>{
       if(email){
        await sendEmailVerification();
        return toast('email send');
       }
       else toast('please type Email');
    }


    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleLoginUser = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
        if(!email){
            setError('please input email');
        }
        else if(!password){
            setError('please type password');
        }
        else if (password.length < 6) {
            setError('password must 6 digit or more');
        }
    }

    return (
        <div className='form-container'>
            <Form onSubmit={handleLoginUser}>
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

                <div className='mb-5'>
                <Button className='me-5' onClick={resetPassword} variant="outline-success">Forgot password?</Button>
                <Button variant="outline-warning" onClick={emailVerification}>Verify Email</Button>
                </div>
                


                <SocialLink></SocialLink>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;