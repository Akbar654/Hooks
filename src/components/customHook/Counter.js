import { useState } from "react";
import useCounter from "./useCounter";

const Counter = () => {

    const [value, increment, decrement, reset] = useCounter(0);
    
    return(
        <div>
            <h2>Value of Counter is : {value}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;