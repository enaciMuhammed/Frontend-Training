import {useState} from "react";

function ControlledForm () {
    const [inputName, setInputName] = useState('');
    function handleChange(e) {
        setInputName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name</label>
                <input type="text" value={inputName} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>

            <div>Your name is {inputName}</div>
        </div>


    );
}

export default ControlledForm;