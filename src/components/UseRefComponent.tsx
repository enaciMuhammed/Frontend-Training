import {useRef} from "react";

export default function FocusInput() {
    const inputRef = useRef(null);
    const focusInput = () => {
        // @ts-ignore
        inputRef.current.focus();
    }
    return (
        <div>
            <h2>useRef</h2>
            <p>The <strong>useRef</strong> hook creates a reference that persists across renders and doesn’t cause re-rendering when it changes. It’s often used for accessing DOM elements directly or storing mutable values.</p>
            <h3>Example</h3>
            <input ref={inputRef} type="text"/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

/*
    Explanation:

useRef creates a reference to the input element that persists across renders.
inputRef.current.focus() gives direct access to the DOM to set focus.
 */