import React,{useEffect, useState} from "react";

const HookEffCounter = () => {

    const [ count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('updating');
        document.title = `You Clicked ${count} times`
    }, [count])
    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(prevValue => prevValue + 1)}>Click {count} Times</button>
        </div>
    )
}

export default HookEffCounter;