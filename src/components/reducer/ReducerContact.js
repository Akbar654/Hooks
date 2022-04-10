import { useReducer, useRef, useState } from "react";

const initialValue =  [ { id : Date.now(), name : "Akbar", email : "akbar@gmail.com" } ];
const reducer = (state, action) => {
    switch(action.type) {

        case  "add" :
            return [ ...state, action.payload ];
        
        case  "delete" :
            return state.filter( contact => {
                return contact.id !== action.payload.id;
            });

        default :
            throw new Error();
    }
}

const ReducerContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [state, dispatch] = useReducer(reducer, initialValue);
    const focusEle = useRef("");
    console.log(state)

    const addContact = (e) => {
        
        e.preventDefault();
        const contact = {
            id : Date.now(),
            name,
            email
        }

        dispatch({ type : 'add', payload : contact });
        setName("");
        setEmail("");
        focusEle.current.focus();

    }

    return(
        <div>
            <h1>ReducerContact</h1>
            <form onSubmit={addContact}> 
                <input type="text" placeholder="Name" value={name} onChange={ (e) => setName(e.target.value) } ref={focusEle} />
                <input type="text" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value)  } />
                <div>
                    <button>Add Contact</button>
                </div>
            </form>
            <div>
                <ul>
                   { 
                        state.map( (contact) => {
                            return(
                                <li key={contact.id}>
                                    <h2>{contact.name}</h2>
                                    <h2>{contact.email}</h2>
                                    <div>
                                        <button onClick={ () => dispatch({ type : 'delete', payload : { id : contact.id } }) }>Delete</button>
                                    </div>
                                </li>
                            );
                        }) 
                    }
                </ul>
            </div>
        </div>
    );
}

export default ReducerContact;