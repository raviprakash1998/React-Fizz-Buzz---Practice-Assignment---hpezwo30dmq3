import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [count,setCOunt]=useState(1);
const handleInc=() => {
  setCOunt(count+1);
};
const handleDec=() => {
  setCOunt(count-1);
};
  return (
    <div id="main">
     <button id="increment"onClick={handleInc}>increment</button>
      { count%3==0 && count%5==0 && <div className='fizzbuzz' id="counter">{count}</div> || count%3==0 && <div className='fizz' id="counter">{count}</div> || count%5==0 && <div className='buzz' id="counter">{count}</div> || <div className='normal' id="counter">{count}</div> }
    <button id="decrement" onClick={handleDec}>decrement</button>

    </div>
  )
}


export default App;
