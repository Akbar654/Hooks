import { useState, useContext } from "react";
import FunctionCompoent from "./component/FunctionComponent";
import { CounterContext } from "./CounterContext";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return(
        <div className="mainCounter">
            <h2>{ `Counter value is ${counter}` }</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <CounterContext.Provider value={ { counter, setCounter} }>
                <FunctionCompoent></FunctionCompoent>
            </CounterContext.Provider>
            
            
        </div>
    );
}

export default Counter;