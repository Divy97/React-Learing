import React from 'react';
//UseState

// import HookCounter from './Components/UseState/HookCounter';
// import HookCounterTwo from './Components/UseState/HookCounterTwo';
// import HookCounterThree from './Components/UseState/HookCounterThree';
// import HookCounterFour from './Components/UseState/HookCounterFour';

//UseEffect

// import HookEffCounter from './Components/UseEffect/HookEffCounter';
// import HookMouse from './Components/UseEffect/HookMouse';
// import MouseContainer from './Components/UseEffect/MouseContainer';
// import IntervalCounter from './Components/UseEffect/IntervalCounter';

import DataFetching from './Components/UseEffect/DataFetch/DataFetching';

export default function App() {
  return (
    <div>

     {/* UseEffect 
     <HookEffCounter/> 
     <HookMouse /> 
     <MouseContainer /> 
     <IntervalCounter />  */}

      <DataFetching/>

      {/* UseState 
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}
    </div>
  );
}
