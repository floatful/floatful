import './css/App.css';
import React, {useState, useReducer} from 'react';
import SelectorList from './components/selectors/SelectorList';
import PropertiesList from './components/properties/PropertiesList';
import ElementVisualizer from './components/visualizer/ElementVisualizer';

import {CSSProperty, PROPERTY_TYPES} from './data/CSSProperty.js'
import CSSRule from './data/CSSRule';

import {rulesReducer, ACTIONS} from './reducers/rules'

const App = () => {

	const DEFAULT_ELEMENTS = [
		new CSSRule("div", "div", [
			new CSSProperty(PROPERTY_TYPES.NUMERICAL, "margin", "margin", 10, null, "px"),
			new CSSProperty(PROPERTY_TYPES.RESTRICTED, "box-sizing", "boxSizing", "border-box", ["border-box", "inherit"])
		]),
		new CSSRule("h1", "h1", [
			new CSSProperty(PROPERTY_TYPES.NUMERICAL, "font-size", "fontSize", 2, null, "rem")
		])
	];

	const [rules, dispatch] = useReducer(rulesReducer, DEFAULT_ELEMENTS)
	const [selectedRules, setSelectedRules] = useState([]);

	
	const handleRuleSelect = (rules) => {
		if(rules) {
			setSelectedRules(rules);
		}
	};
	
	
	return (
		<>
			<SelectorList 
				rules = {rules}
				dispatch = {dispatch}
				onRuleSelect={handleRuleSelect}
			/>
			{
				/*	TODO:
					Refactor code to not have to map over same selected elements twice,
					while still separating properties list from element visualizer within
					the app (one will be main content and the other will be in right menu)
				*/
			}

			{rules.map((rule) => { return selectedRules.includes(rule.selector) &&
				<PropertiesList 
					key = {rule}
					rule = {rule}
					dispatch = {dispatch}
				/>
			})}

			<div className = "floatful floatful--visualizer">
				{rules.map(
					(rule) => { return selectedRules.includes(rule.selector) &&
						<ElementVisualizer 
							key = {rule.selector}
							rule = {rule}
						/>
					}
				)}
			</div>
		</>
    );
}

export default App;
