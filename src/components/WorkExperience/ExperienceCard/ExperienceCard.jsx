import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  return (
    <div className='work-experience-card'>
      <h6>{details.title}</h6>

      <div className='work-duration'>{details.date}</div>

      {details.responsibilties && details.responsibilties.length > 0 && (
        <ul>
          {details.responsibilties.map((item) => (
            <li key={item}> {item} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
