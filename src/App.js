import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/Button";
import Checkbox from "./components/Checkbox";
import TextInput from "./components/TextInput";
import Styling from "./components/Styling";
import Containers from "./components/Containers";
import Grids from "./components/Grids";

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
