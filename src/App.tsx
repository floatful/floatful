import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";

import Rule from "./data/Rule";
import Property from "./data/Rule";

const App = () => {
	const [count, setCount] = useState(0);

	const AppView = styled.div<{ light: boolean }>`
		background-color: ${(props) => (props.light ? "#e5e8f1" : "#22252f")};
		color: ${(props) => (props.light ? "#22252f" : "#e5e8f1")};
		height: 100%;
		padding: 2em;
	`;

	return (
		<AppView light>
			<h1>Floatful</h1>
			<p>Hello there!</p>
		</AppView>
	);
};

export default App;
