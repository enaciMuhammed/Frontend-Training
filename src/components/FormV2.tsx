import {  useState } from "react";
// @ts-ignore
import { JSXInternal } from "preact/src/jsx";

function Form() {
  const [parameter, setParameter] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    confirmPassword: "",
  });

  function handleSubmit(
    event: JSXInternal.TargetedEvent<HTMLInputElement, Event>
  ) {
    event.preventDefault();
    const request = {
      name: parameter.name,
      email: parameter.email,
      age: parameter.age,
      password: parameter.password,
      conformPassword: parameter.confirmPassword,
    };
    console.log(request);
  }

  function handleChange(
    event: JSXInternal.TargetedEvent<HTMLInputElement, Event>
  ) {
    setParameter((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          gap: "1rem",
          margin: "auto ",
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ textAlign: "center" }}>Register with us</h2>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={parameter.name}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={parameter.email}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={parameter.age}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={parameter.password}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={parameter.confirmPassword}
          onChange={(event) => {
            handleChange(event);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
