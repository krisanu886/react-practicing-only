import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  const Increment = () =>{
    setCount(count+1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </>
  );
}
export default App;
