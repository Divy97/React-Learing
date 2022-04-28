import React, { useState } from 'react';
const HookCounterThree = () => {
    
    const [name, setName] = useState({firstName: "", lastName: ""});
  return (
    <div> 
        <form>
            <input type="text" placeholder='Enter FirstName' value={name.firstName} onChange={ e => setName({...name, firstName: e.target.value})}/>
            <input type="text" placeholder='Enter lastName'  value={name.lastName} onChange={ e => setName({...name, lastName: e.target.value})}/>
            <h2>Your FirstName is- {name.firstName}</h2>
            <h2>Your LastName is- {name.lastName}</h2>
        </form>
    </div>
  );
};

export default HookCounterThree;