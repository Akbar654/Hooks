import React, {useRef, useState, useEffect} from "react";

function RefHook() {

    let [name, setName] = useState("Akbar");
    let refEle = useRef("");
    let [counter, setCounter] = useState(0);
    let previousValue = useRef("");
    
    useEffect( () => {
        document.title = 'Ref Hook';
        previousValue.current = counter;
    }, [counter]);

    function reset() {
        refEle.current.focus();
        setName("");
    }

    return(
        <div>
            <input type="text" value={name} 
                onChange={ (e) => setName(e.target.value) }
                ref={refEle} />
            <button onClick={reset}>Reset</button>
            <h1>My name is {name}</h1>
            <hr></hr>
            <h1>Random number : {counter}</h1>
            {typeof previousValue.current !== 'undefined' && (
                <h2>Previous value is : {previousValue.current}</h2>
            )}
            <button onClick={ (e) => setCounter(Math.ceil(Math.random() * 100 )) }>Generate number</button>
        </div>
    );
}

export default RefHook;