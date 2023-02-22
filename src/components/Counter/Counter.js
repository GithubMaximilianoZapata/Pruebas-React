import React, { useState} from 'react';
import "./Counter.css"

const Counter = ({stock}) => {
  const [counter, setCounter] = useState(0);
  let carrito = [];

  const clickDown = () => {
    if (counter !== 0) {
        setCounter(counter - 1);        
    } 
  };
  const clickUp = () => {
    if (counter !== stock) {
        setCounter(counter + 1);        
    }   
  };
  const agregar = () => {    
    carrito.push(counter);
    console.log(carrito);
  };
 return (
    <div className='contador'>
      <button className='button1' onClick={clickDown}>-</button>
      {counter}
      <button className='button2' onClick={clickUp}>+</button>
      <button className='button3' onClick={agregar}>Agregar al carrito</button>
    </div>
  );
};
export default Counter;