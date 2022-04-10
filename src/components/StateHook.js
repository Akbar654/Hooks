import React, { useState, useEffect } from "react";

function StateHook() {

    let [name, setName] = useState('Akbar');
    let [flag, setFlag] = useState(false);
    let [value, setValue] = useState(0);
    let [names, setNames] = useState([]);

    useEffect( () => {
        document.title = 'State Hook';
    },[]);

    function changeFlag() {
        setFlag(!false);
    }

    function increment() {
        setValue( value + 1 );
    }

    function decrement() {
        setValue( value - 1 );
    }

    function addNames(e) {
        e.preventDefault();
        setNames([...names, { id: names.length, name } ]);
        setName('');
    }

    return(
        <div>
            <h1>Use State Hoook value {  name  }</h1>
            <button onClick={ changeFlag }>Change Value</button>
            <hr></hr>
            <button onClick={increment}>+</button>
                {value}
            <button onClick={decrement}>-</button>
            <hr></hr>
            <form onSubmit={addNames}>
                <input type="text" placeholder="Enter Name" value={name}
                onChange={ (e) => setName(e.target.value) }></input>
                <button>Submit</button>
            </form>
            <hr></hr>
            <ul>
                {names.map( (item) => (
                    <li key={item.id}>{item.name}</li>
                ) )}
            </ul>
        </div>
    );
}

export default StateHook;