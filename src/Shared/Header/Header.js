import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };
    return (
        <div>
            <Navbar fixed='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Dr Afra</Navbar.Brand>
                    <Nav className="navLink ms-auto">
                        <Link to='/home'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/about'>About</Link>
                        {
                            user ?
                            <Button onClick={logout}>SignOut</Button>
                            :
                            <Link to='/login'>Login</Link>
                       
                        }
                        

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;