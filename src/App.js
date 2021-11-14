import logo from "./logo.svg";
import "./App.css";
import { Buttons, Checkbox, Containers, Grids, Styling, TextInput } from "./components";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Buttons />
                <Checkbox />
                <TextInput />
                <Styling />
                <Containers />
                <Grids />
            </header>
        </div>
    );
}

export default App;
