import {Dispatch, useState} from "react";
import {JSXInternal} from "preact/src/jsx";
import {StateUpdater} from "preact-hooks";

function Form () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    function  handleSubmit(event : JSXInternal.TargetedEvent<HTMLInputElement, Event>) {
        event.preventDefault();
        const request = {
            name: name,
            email: email,
            age: age,
            password: password,
        }
        console.log(request);
    }


    function handleChange(event: JSXInternal.TargetedEvent<HTMLInputElement, Event>, setParameter:  Dispatch<StateUpdater<string>>) {
        setParameter(event.target.value)
    }


    return (
        <div>
            <form style={{display: "flex", flexDirection: "column", width: "500px", gap: "1rem", margin: "auto "}} onSubmit={handleSubmit}>
                <h2>Register with us</h2>
                <input type="text" placeholder="Full name" value={name} onChange={(event) => {handleChange(event, setName)}} />
                <input type="email" placeholder="Email" value={email} onChange={(event) => {handleChange(event, setEmail)}} />
                <input type="number" placeholder="Age" value={age} onChange={(event) => {handleChange(event, setAge)}}/>
                <input type="password" placeholder="Password" value={password} onChange={(event) => {handleChange(event, setPassword)}}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;