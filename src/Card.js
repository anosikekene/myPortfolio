import React from "react";
import "./Card.css";

const Card = ({ title, description, gitLink, link, languages }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>

      <div className="languages">
        {languages.map((language, index) => (
          <div className="language">{language}</div>
        ))}
      </div>
      <div className="description">
        {description}
        <div className="links">
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
