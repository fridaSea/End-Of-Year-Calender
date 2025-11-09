import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

interface CardProps {
  //onClick: () => void;  optionale Funktion, die bei Klick ausgeführt wird
  dayId: number;
  children: React.ReactNode; // Inhalt der Card (z. B. Text, Überschriften, Bilder)
}

function Card({ dayId, children }: CardProps) {
  return (
    <NavLink to={`/day/${dayId}`} className="card">
      {children}
    </NavLink>
  );
}

export default Card;
