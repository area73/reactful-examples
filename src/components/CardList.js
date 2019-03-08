import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.profiles.map(item => <Card key={item.id}{...item}/>)}
    </div>
  );
};

export default CardList;
