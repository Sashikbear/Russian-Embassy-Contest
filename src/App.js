import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import Bench from "./components/Bench";
function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/form" component={Form} />
					<Route exact path="/bench" component={Bench} />
					<Route exact path="/rules" component={Rules} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
