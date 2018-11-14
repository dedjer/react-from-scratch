import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="span-12" />
				<Jumbotron>
					<h1>Hello World!</h1>
				</Jumbotron>
			</div>
		);
	}
}

export default App;
