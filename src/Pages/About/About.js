import React from 'react';
import './About.css';
import mainImg from '../../images/AboutImg/main.jpg';
import Footer from '../../Shared/Footer/Footer';

const About = () => {
    return (
        <div className='container About'>
           <div className='aboutImage'>
               <img src={mainImg} alt="" />
               <p className='mt-2 text-success'>Hello, I am Laizu Akram</p>
               <div></div>
           </div>
           <div>
               <blockquote>

                    <h4>Future Goals</h4>
                    <p>Lot of plan in my think for future achieved. Already I will start one mission to learnig complete web development. I hope, finished my web development course with gather proper knowledge and grow programming skils in myself. In this year I will complete this course and prepared myself for job / interny any how inshallah. Next year 2023 my dream I will start my dream job as a Web Developer and provide service world wide my best hardworking. When I will work any company or agency I will try to give them my creative project and also follw there documentation and developed there any kind of web application. 2023 to 2025 I continue my job with my full effort. In this time don't stop my learning, I study regularly.2026 I will make me a cyber security expert or trendy section but obviously inside of programming. I also like programming 'do code code code' this is my quote. I am not CSE student but I have lot of dreams with programming. I am not try to code I love it I enjoy it I feel it. I feel good group study and group working with team member. Onday I will make my own company with my best talented friends.   </p>
               </blockquote>
               <Footer></Footer>
           </div>
        </div>
    );
};

export default About;