import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";

import Rule from "./data/Rule";
import Property from "./data/Property";
import { rulesReducer } from "./reducers/rulesReducer";
import SelectorList from "./components/selectors/SelectorList";
import ElementVisualizer from "./components/visualizer/ElementVisualizer";
import { PROPERTY_TYPE } from "./data/PropertyTypes";

const App = () => {
	const [count, setCount] = useState(0);
	const [selectedRule, setSelectedRule] = useState('');

	const AppView = styled.div<{ light: boolean }>`
		background-color: ${(props) => (props.light ? "#e5e8f1" : "#22252f")};
		color: ${(props) => (props.light ? "#22252f" : "#e5e8f1")};
		height: 100%;
		padding: 2em;
	`;

	const testRules=[new Rule("p", "p", undefined, [new Property("fontSize", "font-size", [PROPERTY_TYPE.NUMERIC], "40")]), new Rule("div", "div", undefined, undefined, [new Rule("h1", "h1")])];
	const [rules, dispatch] = useReducer(rulesReducer, testRules);

	const visualRule = rules.find((rule, index, array)=> {rule.selector === selectedRule});

	return (
		<AppView light>
			<h1>Floatful</h1>
			<p>Hello there!</p>
			<SelectorList 
				rules={rules} 
				selectedRules={[]} 
				onRuleSelect={(e:React.MouseEvent<HTMLLIElement>, selector:string) => {setSelectedRule(selector); console.log("Clicked!");}}
				dispatch={dispatch}
			/>
			{
				visualRule != undefined && <ElementVisualizer rule={visualRule}/>
			}
		</AppView>
	);
};

export default App;
