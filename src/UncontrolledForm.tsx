import {useRef} from "react";

function UncontrolledForm () {
    const inputRef = useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted value: ${inputRef.current.value}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;