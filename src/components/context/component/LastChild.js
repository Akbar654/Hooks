import { useContext } from "react";
import { CounterContext } from "../CounterContext";

const LastChild = () => {
    
    const { counter, setCounter } = useContext(CounterContext); 
    return(
        <div className="lastChild">
            <h2>Last Child Component</h2>
            <p>{ counter }</p>
            <button onClick={ () =>  setCounter( counter - 1 )  }>Decrement</button>
            <button onClick={ () =>  setCounter( counter + 1 )  }>Increment</button>
        </div>
    );
}

export default LastChild;