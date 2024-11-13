import {useRef} from "react";

function UncontrolledForm () {
    const inputRef = useRef(null)
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // @ts-ignore
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