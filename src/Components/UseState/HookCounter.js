import React, { useState } from 'react';
const HookCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button style={{margin:'20'}} onClick={() => setCount(count + 1 )}>Count {count}</button>
    </div>
  );
};

export default HookCounter;