import React, { useState } from "react";
import "./CounterApp.css"; // Import your CSS file for styling

function CounterApp() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="icons">
        <div className="button-container">
       
        <p id="count"> Count : {count}</p>
        <button className="button" onClick={handleReset}>
          RESET
        </button>
        <button className="button" onClick={handleMinus}>
          -
        </button>
         <button className="button" onClick={handlePlus}>
          +
        </button>
     
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
