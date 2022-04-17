import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
   
    return (
        <div className='container mt-5 p-3'>
            <h3 className='text-center text-info'>Contact Us</h3>
            <p>Please feel free to contact with me. Any time you can email for your health support. I will support free virtual health support for your emergency moment.</p>
            <div className='footer-container'>
                <div className='contact'>
                    <div className='contact-info'>
                        <h5>Contact Info</h5>
                        <p>Mob      :   +2 987545</p>
                        <p>Land     :   +0 727115</p>
                        <p>Email    :   afra@gmail.com</p>
                        <p>address  :   Road-10, Dhanmondi, Dhaka</p>
                    </div>
                    <div className='contact-info'>
                        <h5>Clinic Timing</h5>
                        <p>Saturday     : 09:00 AM TO 06:00 PM</p>
                        <p>Sunday       : 09:00 AM TO 06:00 PM</p>
                        <p>Monday       : 09:00 AM TO 06:00 PM</p>
                        <p>Tuesday      : 09:00 AM TO 06:00 PM</p>
                        <p>Wednesday    : 09:00 AM TO 06:00 PM</p>
                        <p>Thursday     : 09:00 AM TO 06:00 PM</p>
                        <p>Friday       : <span className='text-danger'>Closed</span></p>
                    </div>
                </div>
                <div className='appointment'>
                    <h5>Appointment</h5>
                    <div className='input-group'>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="First Name"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Subject"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <InputGroup>
                            <FormControl as="textarea" aria-label="With textarea" placeholder='Message' />
                        </InputGroup>
                    </div>
                </div>
            </div>
            
            <footer className='footer'><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> <script>document.write(new Date().getFullYear())</script>Developed by "Laizu"</footer>
        </div>
        
    );
};

export default Footer;