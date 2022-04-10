import React, { useMemo, useState, useEffect, useCallback } from "react";

function MemoHook() {

    let [name, setName] = useState("");
    let [counter, setCounter] = useState(1);
    
    useEffect( () => {
        document.title = 'Memo Hook';
    },[]);

    let result = useMemo( () => {
        return factorial(counter);
    }, [counter]);

    const displayName = useCallback( (greeting) => {
        return greeting +' ' + name;
    }, [name]);

    return(
        <div>
            <h1>Use Memo Hook</h1>
            <hr></hr>
            <h1>Factorial of a {counter} is : {result} </h1>
            <button onClick={ () => setCounter(counter-1) }>Decrement</button>
            <button onClick={ () => setCounter(counter+1) }>Increment</button>
            <hr></hr>
            <DisplayName displayName={ displayName }></DisplayName>
            <input type="text" placeholder="Enter Name" onChange={ (e) => setName(e.target.value)} />
        </div>
    );

}

// Use with Memoiz value
// const DisplayName = React.memo( ( { name }) => {
//     console.log('displayname is used with memo')
//     return <p> {`My Name is ${name} `} </p>
// });

// Use with Memoiz function
const DisplayName = ( {displayName }) => {
    const [value, setValue] = useState("");
    useEffect( () => {
        setValue(displayName("Hello"));
        console.log('Display name passes with function.')
    }, [displayName]);
    return <p>{`My Name is ${value}`}</p>
}

let factorial = (n) => {

    let i = 1;
    while(i < 30000000) i++;
    if(n < 0) {
        return -1;
    }

    if(n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

export default MemoHook;