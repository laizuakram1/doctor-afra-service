
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg';
import banner4 from '../../../images/Banner/banner4.jpg';
import banner3 from '../../../images/Banner/banner3.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img style={{ height: '650px' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h3>Pediatric</h3>
                        <p>I will so careful and sensitive pediatric patents. Always I will try to provide a perfect solution.  </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: '650px' }}
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h3>Gynaecology</h3>
                        <p>You can share your any kind of Gynaecology porblem. I will provide you to better solution for any Gynaecological problem.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '650px' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h3>Ultrasonography</h3>
                        <p>I will do 4D Doppler ultrasonography. I observed you and carefully done your ultrasongram. Moreover, I will provide you to a perfect ultrasongram Report.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;