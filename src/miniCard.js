import React from "react";
import "./miniCard.css";
const MiniCard = ({ name, cardlink, logo }) => {
  return (
    <a
      className="minicard"
      href={cardlink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="link">
        <img src={logo} alt={name} className="minicardlogo" />
      </div>
      {name}
    </a>
  );
};
export default MiniCard;
