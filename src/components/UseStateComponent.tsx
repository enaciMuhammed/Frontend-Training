

import {useState} from "react";

function Count () {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Count;


//UNDERSTANDING REACT HOOKS

/*React Hooks are functions that lets you "hook into"
React state and lifecycle features from function components,
enabling powerful state management and side effect handling
without needing class components.
*/

//Overview of some commonly used hooks with examples.
/*
    1. useState
    The useState hook allows you to add state to a functional
     component. it returns an array with two elements: the
     current state value and a function to update it

 */