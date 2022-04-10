import { useState } from "react"


const useCounter = (intialValue) => {

    const [value, setValue] = useState(intialValue);

    const increment = () => {
        setValue( value + 1);
    }

    const decrement = () => {
        setValue( value - 1 );
    }
    
    const reset = () => {
        setValue(intialValue);
    }

    return [value, increment, decrement, reset];
}

export default useCounter;