/*4. useReducer
The useReducer hook is an alternative to useState
for managing complex state logic in function components.
It’s commonly used when you have multiple state variables
 or when the state transitions are complex.

    Example: Managing State with a Reducer*/


import {useReducer} from 'react';

const initialState = {count: 0};

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return initialState
        default:
            throw new Error();
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>useReducer </h2>
            <p>The useReducer hook is an alternative to useState
                for managing complex state logic in function components.
                It’s commonly used when you have multiple state variables
                or when the state transitions are complex.</p>
            <h3>Example: Managing State with a Reducer</h3>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

/*
Explanation:

    useReducer uses a reducer function and an initial state.
    The dispatch function triggers state updates by
    passing action objects.

 */
