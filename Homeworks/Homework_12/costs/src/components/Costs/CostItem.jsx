// import React, { useState } from 'react'
import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';

export default function CostItem(props) {
  // console.log(props);

  // const [description, setDescription] = useState(props.description);
  // console.log('Text in component definition');

  // const changDescriptionHandler = () => {
  //   setDescription('New cost'); // description = 'New cost'; & CostItem();
  //   console.log(description);
  // }  

        
  return (
  <Card className='cost-item'>    
    <CostDate date={props.date} />
    <div className='cost-item__description'>       
        <h2>{props.description}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={changDescriptionHandler}>Изменить описание</button> */}
  </Card>
  );
}
