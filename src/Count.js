import React, { useState } from "react";
import "./App.css";

const Count = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="div">
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button disabled={count === 0} onClick={Decrement}>
          Decrement
        </button>
        <button disabled={count === 0} onClick={Reset}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Count;
