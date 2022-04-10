import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
    
    switch(action.type) {
        case "increment" :
            return state + 1;
        case "decrement" : 
            return state - 1;
        default :
            throw new Error();    
    } 
}

const Reducer = () => {

    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialValue);

    return(
        <div>
            <h2> {` Counter value is : ${state}` } </h2>
            <button onClick={ () => dispatch({ type : "decrement" }) }>Decrement</button>
            <button onClick={ () => dispatch({ type : "increment" }) }>Increment</button>
        </div>
    );
}

export default Reducer;