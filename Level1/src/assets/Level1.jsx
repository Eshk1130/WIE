import React, { useState, useEffect, useRef } from "react";
import "./Level1.css";
import backgroundImg from "./background.png";
import sudokuGridImg from "./soduku.png";
import robotImg from "./robot.png";


const echoRiddles = [
  {
    intro: "Symmetry hides, but patterns shine.",
    fullRiddle: `1. Trace the path of symmetry, find the center.  
(There lies your first digit.)

2. Now, from the heart, jump diagonally northeast.  
(It's a narrow path, but a bright one.)

3. Turn to the outer guardians, like the ends of a rainbow. Choose the one you wish you could always go to.
**bottom-left, bottom-right. Choose the bottom right

4. Where dawn unfolds its earliest light.

5. You start anew at dawn’s gate —  
one-third through the journey,  
Gravity takes hold.  
You drift with the sun, then descend into the longest shadow.`,
    finalCode: "56187"
  },
  {
    intro: "Stars guide the wise, but only one falls at midnight.",
    fullRiddle: `Find the celestial midpoint, where every path crosses.

1. From the heavens, glide southeast through diagonal stars — land on the third echo.

2. Now turn to the North Wind — the top corners. 3. The one that guards the setting sun holds your third digit.

4. Where the echo of the second row meets the fire of the east — lies your next mark.

5. Trace the fall of Orion — begin on his belt (middle row), move west one-third of the way, then descend until you strike a wall.`,
    finalCode: "57168"
  },
  {
    intro: "Not all structures are built on bricks — some are made of balance.",
    fullRiddle: `1. Seek the axis of reflection. Where left mirrors right and top mirrors bottom, there lies your first truth.

2. A builder once stepped northwest from the center — twice — before he struck gold.

3. In the archive of the ancients, the one who faced the rising sun stood in the lowest shadows.

4. In the tallest tower, where windows catch the morning light, a digit hides.

5. Start at the leftmost point of dawn, rise two levels, then slip east with caution.`,
    finalCode: "56181"
  },
  {
    intro: "Every maze has a heartbeat. Follow its pulse.",
    fullRiddle: `1. Feel the center beat — it pulses from symmetry. Begin there.

2. Trace the lifeblood flowing to its twin in the northeast — two hops away.

3. The exit to the maze lies hidden in a corner, always watching. Pick the corner your instinct trusts most.

4. A whisper came from the sky’s edge — where the birds rest at first light.

5. Begin at sunrise’s gate. Take a third of the step across, then fall like rain down the column until you reach the root.`,
    finalCode: "51288"
  }
];

const selectedRiddle = echoRiddles[Math.floor(Math.random() * echoRiddles.length)];

export default function SudokuGame() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [levelCleared, setLevelCleared] = useState(false);
  const [showRiddlePopup, setShowRiddlePopup] = useState(false);
  const [showIntroPopup, setShowIntroPopup] = useState(true);

  const correctUserId = selectedRiddle.finalCode.split("");

  const inputRefs = useRef([]);

  const handleUserIdChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newId = [...userId];
    newId[index] = value;
    setUserId(newId);
    if (value && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    if (userId.join("") === correctUserId.join("")) {
      setMessage("✅ Correct! Level unlocked.");
      setLevelCleared(true);
    } else {
      setMessage("❌ Incorrect ID. Try again.");
    }
  };

  const handleNextLevel = () => {
    alert("🎉 Welcome to Level 2!");
  };

  return (
    <div
      className="game-container text-white"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="level-title">LEVEL 1</h1>

      <div className="top-right-ui">
        <button
          onClick={() => setShowRiddlePopup(true)}
          className="hint-button glow"
        >
          Echo Riddles
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
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="agent-input"
          />

          <label className="block text-lg mb-1 mt-4">//OBJECTIVE</label>
          <p className="text-sm mb-4">
            Use the riddle to decrypt the 5-digit Agent Key.  
            Focus on position, not arithmetic. Let the grid speak.
          </p>

          <label className="block text-lg mb-1">//ACCESS: INPUT AGENT KEY</label>
          <div className="digit-input-container">
            {userId.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleUserIdChange(i, e.target.value)}
                className="digit-input"
                ref={(el) => (inputRefs.current[i] = el)}
              />
            ))}
          </div>

          <p className="text-xs italic mb-4">Only true agents will decode this.</p>

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

      <div className="robot-container">
        <img src={robotImg} alt="Robot" className="robot-img" />
        <div className="robot-dialogue">
          <div className="dialogue-text italic">{selectedRiddle.intro}</div>
        </div>
      </div>

      {showRiddlePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="text-2xl font-bold mb-4">Echo Riddle</h2>
            <p className="text-sm whitespace-pre-line">
              {selectedRiddle.fullRiddle}
            </p>
            <button
              onClick={() => setShowRiddlePopup(false)}
              className="mt-6 px-4 py-2 bg-red-600 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showIntroPopup && (
        <div className="popup-overlay">
          <div className="popup-content max-w-xl text-sm whitespace-pre-line">
            <h2 className="text-2xl font-bold mb-4">[ECHO SYSTEM INITIALIZED...]</h2>
            Agent welcome.

            The cipher lies beneath the surface.  
            This time, the symmetry is broken—but not lost.  
            Order is chaos in disguise. Five digits. One shot.  

            Pattern matters. Pay attention to position, not prominence.  
            Decrypt the Key ID. This is not arithmetic—it’s awareness.

            <button
              onClick={() => setShowIntroPopup(false)}
              className="mt-6 px-4 py-2 bg-green-600 rounded"
            >
              Begin
            </button>
          </div>
        </div>
      )}
    </div>
  );
}













