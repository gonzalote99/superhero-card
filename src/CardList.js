import React from 'react';
import './card-list.styles.css';
import Card from './Card';

const CardList = ({robos}) => {
const cardComponent = robos.map((user, i) => {
return <Card key={i} id={robos[i].id} name={robos[i].name} place={robos[i].place}/>
})
  return(
   
       <div className="card-list">
       {cardComponent}

      </div>
  )
}

export default CardList;