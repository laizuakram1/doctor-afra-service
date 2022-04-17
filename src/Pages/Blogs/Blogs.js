import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container '>
            <blockquote className='blog'>
                <h4>Q1.Difference between authorization and authentication?</h4>
                <p>Ans: Authorization is the process specific what the user select or put document and Authenticatin is the process of verification any kind of user identity or document.For exaple if you get out in our country to any other country in this time obviously you use airport right? so your first step start with authentication like you need to show your identity, passport, visa, NID etc this step is authentication. The second step is authorization, when you show your all documents then they will take some time for authorized your document. Then you will get Out outside in our country this process called different between authentication and authorization. </p>

                <h4>Q2. Why are you using firebase?</h4>
                <p>Ans: Firebase is a google- backed application that is used a developer can developed ios, android and web apps. Moreover, Firebase provide many other usefull services like authentication, Hoisting, Realtime database, Analytics, Cloud messaging, Crashlytics, Performance and Test Tab. This service is very needed and usefull for every developer. If you use to firebase service You can develope any kind of app so smartly. </p>

                <h4>Q3. What other option do you have to implement authentication?</h4>
                <p>Ans: I know five most common authentication system:
                    <ul>
                        <li>Password base authentication.</li>
                        <li>Multi Factor authentication.</li>
                        <li>Certificate base authentication.</li>
                        <li>Biometric authentication: they are 4 types-
                            <p>Facial Recoginition.</p>
                            <p>Fingerprint scanner.</p>
                            <p>Speaker Recognitin.</p>
                            <p>Eye Scanners.</p>
                        </li>
                        <li>Token base authentication.</li>
                    </ul>

                </p>

                <h4>Q4. What other service does firebase provide other than authentication?
                </h4>
                <p>Ans: Firebase obviously provide some extra facilities other then authentication system. First of all I impresed to firebase for firebase hooks. Firebase hooks is a very useable and smart technique without time lost. Then firebase porvide hoisting that will help you to host your local project instant without any hassel.Moreover firebase porvide popular user login and register authenticatin system. Not only for this service Firebase provide AI (Artificial Intelligence) Matchine leearning base app development environment.</p>
            </blockquote>
        </div>
    );
};

export default Blogs;