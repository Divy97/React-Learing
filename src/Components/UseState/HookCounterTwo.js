import React, { useState } from 'react';
const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
      for( let i=0; i<5 ; i++){
          setCount(prevValue => prevValue +1);
      }
  }
  return (
    <div>
       Count : {count}
      <button onClick={() => setCount(prevValue => prevValue + 1)}> Increment </button>
      <button onClick={() => setCount(prevValue => prevValue - 1)}> Decrement </button>
      <button onClick={() => setCount(initialCount)}> Reset </button>
      <button onClick={incrementFive}> Increment 5 </button>
    </div>
  );
};

export default HookCounterTwo;