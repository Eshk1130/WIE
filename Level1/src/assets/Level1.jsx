import React, { useState, useEffect } from "react";
import "./Level1.css";
import backgroundImg from "./background.png";
import sudokuGridImg from "./soduku.png";
import echoBtnImg from "./ECHO HINTS.png";
import robotImg from "./robot.png";  

const correctUserId = [7, 9, 6, 5, 3];

const hintMessages = [
  'The twin of the top-left... but just one step down, one step right." (→ R2C2)',
  '"Where row three meets the edge of logic — a digit sleeps in the sixth chamber." (→ R3C6)',
  '"Five steps across the second band — the number waits in symmetry." (→ R2C5)',
  '"Three columns deep in row five, beneath the shadow of the center." (→ R5C3)',
  '"A whisper in the eighth line, where two loops almost cross paths." (→ R8C8)',
  '"The sixth of the ninth — a final key in the lowest vault." (→ R9C6)'
];

const robotRiddles = [
  "I speak without a mouth and hear without ears. What am I?",
  "The more you take, the more you leave behind. What am I?",
  "What has keys but can't open locks?",
  "I can fill a room but take up no space. What am I?",
  "What disappears as soon as you say its name?"
];

export default function SudokuGame() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [levelCleared, setLevelCleared] = useState(false);
  const [currentRiddle, setCurrentRiddle] = useState("");

  useEffect(() => {
    const randomRiddle = robotRiddles[Math.floor(Math.random() * robotRiddles.length)];
    setCurrentRiddle(randomRiddle);
  }, []);

  const handleUserIdChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newId = [...userId];
    newId[index] = value;
    setUserId(newId);
  };

  const handleSubmit = () => {
    if (userId.join("") === correctUserId.join("")) {
      setMessage("✅ Correct! Level unlocked.");
      setLevelCleared(true);
    } else {
      setMessage("❌ Incorrect ID. Try again.");
      setAttempts(prev => prev + 1);
    }
  };

  const handleNextLevel = () => {
    alert("🎉 Welcome to Level 2!");
  };

  useEffect(() => {
    if (attempts === 2) {
      setShowHints(true);
    }
  }, [attempts]);

  return (
    <div className="game-container text-white" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className="level-title">LEVEL 1</h1>

      <div className="top-right-ui">
        <button onClick={() => setShowHints(true)} disabled={attempts < 2} className={`hint-button ${attempts >= 2 ? "glow" : ""}`}>
          <img src={echoBtnImg} alt="Echo Hints" className="h-10" />
        </button>
      </div>

      <div className="flex-container">
        <div className="sudoku-left">
          <p className="text-base mb-1">CIPHER GRID ACTIVATE v1.0</p>
          <h2 className="text-xl font-bold mb-2">// SUDOKODE</h2>
          <img src={sudokuGridImg} alt="Sudoku Grid" className="sudoku-image" />
        </div>

        <div className="input-section">
          <label className="block text-lg mb-2">//INPUT AGENT NAME</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="agent-input" />

          <label className="block text-lg mb-1 mt-4">//OBJECTIVE</label>
          <p className="text-sm mb-4">
            Where row three meets the edge of logic — a digit sleeps in the sixth chamber.
          </p>

          <label className="block text-lg mb-1">//ACCESS: INPUT AGENT KEY</label>
          <div className="digit-input-container">
            {userId.map((digit, i) => (
              <input key={i} type="text" maxLength="1" value={digit} onChange={(e) => handleUserIdChange(i, e.target.value)} className="digit-input" />
            ))}
          </div>

          <p className="text-xs italic mb-4">This code isn’t just a number. It’s proof you’re one of us.</p>

          <button onClick={handleSubmit} className="submit-button">
            SUBMIT
          </button>

          {message && <p className="mt-4 text-lg font-bold">{message}</p>}

          {levelCleared && (
            <button onClick={handleNextLevel} className="next-level-btn mt-4">
              NEXT LEVEL →
            </button>
          )}
        </div>
      </div>

      {showHints && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="text-2xl font-bold mb-4">Riddle Clues:</h2>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              {hintMessages.map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ul>
            <button onClick={() => setShowHints(false)} className="mt-6 px-4 py-2 bg-red-600 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      <div className="robot-container">
        <img src={robotImg} alt="Robot" className="robot-img" />
        <div className="robot-dialogue">
          <div className="dialogue-text">{currentRiddle}</div>
        </div>
      </div>
    </div>
  );
}







