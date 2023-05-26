import React from 'react';
import './card.styles.css';

const Card = (props) => {
  const { name, place} = props;
  return(
    <div className="card-container">
     <img 
     alt="robots"
     src={`https://robohash.org/${name}?size=180x180`}
     />
     <h2 style={{fontFamily: 'sans-serif'}}>{name}</h2>
     <h2 style={{fontFamily: 'sans-serif'}}>{place}</h2>
      </div>
  )
}

export default Card;