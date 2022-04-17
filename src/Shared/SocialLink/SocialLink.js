import React from 'react';
import googleImg from '../../images/socialBtnIcon/google.png';

const SocialLink = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <button
                className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={googleImg} alt="" />
                <span className='px-2'>Google SignIn</span>
            </button>
            <button
                className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={googleImg} alt="" />
                <span className='px-2'>Github SignIn</span>
            </button>
        </div>
    );
};

export default SocialLink;