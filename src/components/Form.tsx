import { useState } from "react";
// @ts-ignore
import { JSXInternal } from "preact/src/jsx";
import InputField from "./InputField.tsx";


function Form() {
    const [parameter, setParameter] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        confirmPassword: "",
    });

    function handleSubmit(
        event: JSXInternal.TargetedEvent<HTMLFormElement, Event>
    ) {
        event.preventDefault();
        const request = {
            name: parameter.name,
            email: parameter.email,
            age: parameter.age,
            password: parameter.password,
            confirmPassword: parameter.confirmPassword,
        };
        console.log(request);
    }

    function handleChange(
        event: JSXInternal.TargetedEvent<HTMLInputElement, Event>
    ) {
        setParameter((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <div>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2 style={{ textAlign: "center" }}>Register with us</h2>
                <InputField
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={parameter.name}
                    onChange={handleChange}
                />
                <InputField
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={parameter.email}
                    onChange={handleChange}
                />
                <InputField
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={parameter.age}
                    onChange={handleChange}
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={parameter.password}
                    onChange={handleChange}
                />
                <InputField
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={parameter.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit" style={{padding: "8px", cursor: "pointer"}}>Submit</button>
            </form>
        </div>
    );
}

export default Form;











export const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "500px",
    gap: "1rem",
    margin: "auto",
}