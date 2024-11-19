import {useRef} from "react";

function UncontrolledForm () {
    const inputRef = useRef(null)
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // @ts-ignore
        alert(`Submitted value: ${inputRef.current.value}`);
    };
    return (
        <div>
            <h2>    Uncontrolled Form Example</h2>
    <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default UncontrolledForm;