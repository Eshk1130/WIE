import React from 'react';
import qrCode from './assets/qr-code.png'; 
import backg from './assets/backg.png';
import './Level6.css';

const Level6 = () => {
return (
    <div className="container" style={{ fontSize: '1.3rem' }}>
        {/* Top Bar */}
        <header className="header">
            <h1 className="header-title">LEVEL 6</h1>
            <div className="header-right">
                <button className="hints-button">ECHO HINTS</button>
            </div>
        </header>

        {/* Content */}
        <main className="main-content">
            <div className="content-box">
                {/* QR Code */}
                <div className="qr-code">
                    <img src={qrCode} alt="QR Code" />
                </div>

                {/* Text Content */}
                <div className="text-section">
                    <h2>ECHO HAS BEEN HACKED</h2>
                    <p>The system is compromised. <span className="highlight-white">Secrets lie beyond the code.</span></p>
                    <p>Want to know how? <span className="highlight-blue">Scan the QR code to uncover the truth.</span></p>
                    <p className="bold">Dare to dive into the digital abyss?</p>
                </div>
            </div>
        </main>
    </div>
);
};

export default Level6;

