import {useState} from "react";
// @ts-ignore
import {JSXInternal} from "preact/src/jsx";

export default function InputField({ type, placeholder, name, value, onChange }: InputFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <input
            style={{padding: "8px", outline: isFocused ? "1px solid blue" : "none",
                border: "1px solid gray",}}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    );
}

interface InputFieldProps {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (event: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => void;
}
