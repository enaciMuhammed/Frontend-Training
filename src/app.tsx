import ControlledForm from "./components/ControlledForm.tsx";
import UncontrolledForm from "./components/UncontrolledForm.tsx";
import Count from "./components/UseStateComponent.tsx";
import DataFetcher from "./components/UseEffectComponent.tsx";
import ThemeApp from "./components/UseContextComponent.tsx";
// import  "./index.css"

function app () {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <ControlledForm />
            <UncontrolledForm />
            <Count />
            <DataFetcher />
            <ThemeApp />
        </div>
    );
}

export default app;