import "./App.css";
import React, { useState } from "react";

function App() {
  // Declare a state variable 'count' and its setter 'setCount'
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 5);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 3);
  };

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <div>
        <button className="button" onClick={increment}>
          Increment
        </button>
        <button className="button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export default App;
