import {useState} from "react";
import Button from "./Button.tsx";

function BackgroundChange (props: any) {
    const [bgColor, setBgColor] = useState(props.initialBgColor);
    return (
        <div style={{backgroundColor: bgColor, height: '100vh', display: "flex", flexDirection: "column"}}>
            <h2 style={{display: "flex", justifyContent: "center", paddingTop: "8px"}}>Click a button to change the
                background</h2>
            <form onSubmit={(e: any) => {
                e.preventDefault();
            }}>
                <label>Input a color</label>
                <input type="text" value={bgColor} onChange={(e: any) => setBgColor(e.target.value)} />
            </form>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50vh', gap: '10px',}}>
                <Button btnText="Red" btnColor="red" onClick={() => setBgColor("red")}/>
                <Button btnText="Blue" btnColor="blue" onClick={() => setBgColor("blue")}/>
                <Button btnText="Yellow" btnColor="yellow" onClick={() => setBgColor("yellow")}/>
            </div>

            <div className="reset">
                <button onClick={() => setBgColor(props.initialBgColor)} className="reset-btn btn">Reset</button>
            </div>
        </div>
    );
}

export default BackgroundChange;