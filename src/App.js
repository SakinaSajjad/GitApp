
import React from 'react';
import './App.css';
import Background from '../assets/images/Background.png';
import Logo from '../assets/images/Logo.png';
const App = () => {
  return (
    <>
        <div>
            {/* Background Image */}
            <div
                className="background"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100vw',
                    position: 'relative',
                    opacity: 0.3,
                }}
            />

            {/* Content on top of background */}
            <div
                className="content"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <img
                    src={Logo}
                    alt="Logo"
                    style={{ height: '70px', width: '150px' }}
                />
                <button className="signIn">Sign In</button>
            </div>

            {/* Central text and input section */}
            <div
                className="central-content"
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 1,
                }}
            >
                <p className="tvText">Unlimited movies, TV shows, and more</p>
                <p className="starts">Starts at Rs 250. Cancels anytime</p>
                <p className="enterEmail">
                    Ready to watch? Enter your Email to create or restart your membership.
                </p>
                <div className="btnNInput">
                    <input
                        type="email"
                        className="emailInput"
                        placeholder="Email address"
                    />
                    <button className="getStarted">Get Started ></button>
                </div>
            </div>

            
        </div>
        </>
    );
}
 export default App
