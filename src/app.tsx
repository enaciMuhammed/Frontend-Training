import ControlledForm from "./components/ControlledForm.tsx";
import UncontrolledForm from "./components/UncontrolledForm.tsx";
import Count from "./components/UseStateComponent.tsx";
import DataFetcher from "./components/UseEffectComponent.tsx";
import ThemeApp from "./components/UseContextComponent.tsx";
import Counter from "./components/UseReducerComponent.tsx";
import FocusInput from "./components/UseRefComponent.tsx";
import ExpensiveComponent from "./components/UseMemoComponent.tsx";
import BackgroundChange from "./components/BackgroundChange.tsx";
import  "./index.css"
import Form from "./components/Form.tsx";

function app () {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "2rem"}}>
            {/*<ControlledForm />*/}
            {/*<UncontrolledForm />*/}
            {/*<Count />*/}
            {/*<DataFetcher />*/}
            {/*<ThemeApp />*/}
            {/*<Counter />*/}
            {/*<FocusInput />*/}
            {/*<ExpensiveComponent />*/}
            {/*<BackgroundChange initialBgColor="pink" />*/}
            <Form />
        </div>
    );
}

export default app;