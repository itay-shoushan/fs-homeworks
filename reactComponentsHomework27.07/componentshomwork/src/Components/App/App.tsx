import Details from "../Details/Details";
import Header from "../Header/Header";
import Skils from "../Skils/Skils";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header><Header/></header>
			<section><Details/></section>
			<section><Skils/></section>
        </div>
    );
}

export default App;
