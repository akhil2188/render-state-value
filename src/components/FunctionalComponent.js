import React, { useState } from "react";

function StateValue() {
  // Set the initial count state to zero, 0
  const [value, setValue] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setValue(prevValue => prevValue - 1);
  };
  return (
    <div className="content-section">
      <label>Functional Component</label>
      <div className="content-div">
        <button onClick={handleDecrement}>-</button>
        <h5>Value is {value}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="reset" onClick={() => setValue(0)}>Reset</button>
    </div>
  );
}

export default StateValue;