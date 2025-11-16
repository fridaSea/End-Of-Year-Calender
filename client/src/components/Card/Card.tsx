import React, { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup/Popup";

interface CardProps {
  // onClick: () => void;  optionale Funktion, die bei Klick ausgeführt wird
  dayId: number;
  children: React.ReactNode; // Inhalt der Card (z. B. Text, Überschriften, Bilder)
}

function Card({ dayId, children }: CardProps) {
  const today = new Date().getDate();
  const isOpen = today >= dayId;
  // console.log("today :>> ", today);
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    if (isOpen) {
      navigate(`/day/${dayId}`);
    } else {
      setShowPopup(true);
    }
  }

  return (
    <>
      <div
        className={`card ${isOpen ? "open" : "locked"}`}
        onClick={handleClick}
      >
        {children}
      </div>

      <Popup showPopup={showPopup} closePopup={() => setShowPopup(false)}>
        <p>
          Dieser Tag ist noch nicht geöffnet!
          <br />
          <br />
          Nutze diesen Moment doch gerne für einen bewussten Atemzug.
        </p>
      </Popup>
    </>
  );
}

export default Card;
