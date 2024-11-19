import {useState} from "react";

function ControlledForm () {
    const [inputName, setInputName] = useState('');
    function handleChange(e: any) {
        setInputName(e.target.value);
    }
    return (
        <div>
            <h2>Controlled Form Example</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label className="text-red-500">Name</label>
                <input type="text" value={inputName} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>

            <div>Your name is {inputName}</div>
        </div>


    );
}

export default ControlledForm;