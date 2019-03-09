import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
  // const updateValue = props.update || 0;
  return (
    <div className="card-list">
      {props.profiles.map(item => <Card update={props.update} key={item.id}{...item}/>)}
    </div>
  );
};

export default CardList;
