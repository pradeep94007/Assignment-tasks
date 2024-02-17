import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        color: "blue",
        height: "200px",
        width: "300px",
        backgroundColor: "lightgray",
      }}
    >
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
