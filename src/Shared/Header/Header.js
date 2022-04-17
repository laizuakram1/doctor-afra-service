import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
                        <Link to='/login'>Login</Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;