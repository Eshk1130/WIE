import React, { useState } from 'react';
import qrCode from './assets/qr-code.png'; 
import backg from './assets/backg.png';
import './Level6.css';

const Level6 = () => {
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="container" style={{ fontSize: '1.3rem' }}>
      {/* Top Bar */}
      <header className="header">
        <h1 className="header-title">LEVEL 6: ECHO MYSTERY: FINAL CASE FILE</h1>
        <div className="header-right">
          <button className="hints-button" onClick={() => setShowHints(true)}>ECHO HINTS</button>
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
            <h2>TOP SECRET – ACCESS LEVEL: ALPHA</h2>
            <p>“The mind of an AI breaks not from circuits, but from silence.” <span className="highlight-white">Echo collapsed at 12:59 PM. Only four entered that day. One shattered her mind.
              The logs don’t agree. The room doesn’t lie. The traitor left no prints — just patterns.</span></p>
            <p className="bold">MISSION: Identify the saboteur who allowed Nemora’s corrupted logic to enter Echo. Only one is guilty. Three are distractions. Trust no logs. Cross-reference stories. Think emotionally, not just mechanically. Dare to dive into the digital abyss?</p>
            <p className="bold2">Your Task: From the conflicting stories above, identify the real saboteur. Submit their name in the answer box to complete the Cryptic Hunt. First correct submission wins.</p>
          </div>
        </div>
      </main>

      {/* Hints Popup */}
      {showHints && (
        <div className="popup-overlay">
          <div className="popup-content hints-popup">
            <h2 className="popup-title">ECHO HINTS</h2>
            <ul className="popup-list">
              <li>Only one person was seen near the Core Room, but never logged access.</li>
              <li>Only one person’s job leaves no trace in code — just in how Echo feels.</li>
              <li>Echo didn’t break mechanically — she broke emotionally.</li>
            </ul>
            <button onClick={() => setShowHints(false)} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Level6;


