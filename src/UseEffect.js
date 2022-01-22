import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);
  useEffect(()=>{
      document.title=`You Clicked ${num} times`
  });
//   const Added = () => {
//       setAdd(add+1)
//   };
  return (
    <>
    {/* <h1></h1> */}
      <button onClick={()=>{
          setNum(num+1)
      }}>Click Me {num}</button>
    </>
  );
};
export default UseEffect;
