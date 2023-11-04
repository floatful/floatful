import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";

import Rule from "./data/Rule";
import Property from "./data/Rule";
import { rulesReducer } from "./reducers/rulesReducer";
import SelectorList from "./components/selectors/SelectorList";

const App = () => {
	const [count, setCount] = useState(0);

	const AppView = styled.div<{ light: boolean }>`
		background-color: ${(props) => (props.light ? "#e5e8f1" : "#22252f")};
		color: ${(props) => (props.light ? "#22252f" : "#e5e8f1")};
		height: 100%;
		padding: 2em;
	`;

	const testRules=[new Rule("p", "p", []), new Rule("div h1", "h1", [])];
	const [rules, dispatch] = useReducer(rulesReducer, testRules);

	return (
		<AppView light>
			<h1>Floatful</h1>
			<p>Hello there!</p>
			<SelectorList 
				rules={rules} 
				selectedRules={[]} 
				onRuleSelect={(e:React.MouseEvent<HTMLLIElement>, selector:String) => {}}
				dispatch={dispatch}
			/>
		</AppView>
	);
};

export default App;
