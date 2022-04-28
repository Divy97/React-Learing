import React,{useEffect, useState} from "react";

const HookEffCounter = () => {

    const [ count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })
    return(
        <div>
            <button onClick={() => setCount(prevValue => prevValue + 1)}>Click {count} Times</button>
        </div>
    )
}

export default HookEffCounter;