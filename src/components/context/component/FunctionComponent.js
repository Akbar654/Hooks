import { useContext } from "react";
import { CounterContext } from "../CounterContext";
import LastChild from "./LastChild";


const FunctionCompoent = ( ) => {

    const { counter, setCounter } = useContext(CounterContext);

    return(
        <div className="funComp">
            <h2>From FunctionCompoent</h2>
            <p>Counter value is : {counter}</p>
            <button onClick={ () =>  setCounter( counter +1 )  }>Increment</button>
            <ChildComponent />
        </div>
    );
}

const ChildComponent = ( ) => {

    const { counter, setCounter } = useContext(CounterContext);

    return(
        <div className="childComp">
            <h2>Child Component</h2>
            <p>Counter value is : {counter}</p>
            <button onClick={ () => setCounter( counter - 1) } className="padd">Decrement</button>
            <LastChild />
        </div>
    );
}

export default FunctionCompoent;