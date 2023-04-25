import React from 'react';
import '../assets/styles/loading-screen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen-overlay">
            <div className="lds-facebook"></div>
        </div>
    );
};

export default LoadingScreen;
