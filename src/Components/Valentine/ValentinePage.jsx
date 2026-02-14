import React, { useState } from "react";
import "./ValentinePage.css";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: "0px", left: "0px" });
  const [noCount, setNoCount] = useState(0);

  const moveNoButton = () => {
    // Random dramatic movement
    const randomX = Math.floor(Math.random() * 300 - 150);
    const randomY = Math.floor(Math.random() * 300 - 150);

    setNoPosition({
      top: `${randomY}px`,
      left: `${randomX}px`,
    });

    // Make YES button bigger each time
    setYesSize(prev => prev + 0.2);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="page">
      <div className="card">
        {!accepted ? (
          <>
            {/* <img
              // src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              src="https://media.tenor.com/vIj57tJLXyEAAAAj/cute-kawaii.gif"
              alt="cute"
              className="image"
            /> */}

          <img
            className="image"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
            alt="gif"
          />

            <h2>Will you be my Valentine? 💖</h2>

            <div className="buttons">
              <button
                className="yes"
                style={{ transform: `scale(${yesSize})` }}
                onClick={handleYesClick}
              >
                Yes 💕
              </button>

              <button
                className="no"
                onMouseEnter={moveNoButton}
                onClick={handleNoClick}
                style={{
                  position: "relative",
                  top: noPosition.top,
                  left: noPosition.left
                }}
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>

            <p className="warning"> Ayeshu... don’t be mean and click ‘No’ 🥺</p>
          </>
        ) : (
          <div className="YesPageText">
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="celebration"
              className="image"
            />
            <h2>Oh Yeahhh!!! 💕💕💕</h2>
            {/* <p>Best decision of your life 😌</p> */}
          </div>
        )}
      </div>
    </div>
  );
}
