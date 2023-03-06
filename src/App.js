import './css/App.css';
import React, {useState} from 'react';
import SelectorList from './components/selectors/SelectorList';
import PropertiesList from './components/properties/PropertiesList';
import ElementVisualizer from './components/visualizer/ElementVisualizer';

import {CSSNumericProperty, CSSTextProperty} from './data/CSSProperty.js'
import CSSRule from './data/CSSRule';

const App = () => {

	const DEFAULT_ELEMENTS = [
		new CSSRule("div", "div", [
			new CSSNumericProperty("margin", "margin", 10, "px"),
			new CSSTextProperty("box-sizing", "boxSizing", ["border-box", "inherit"], "border-box")
		]),
		new CSSRule("h1", "h1", [
			new CSSNumericProperty("font-size", "fontSize", 2, "rem")
		])
	];

	const [elements, setElements] = useState(DEFAULT_ELEMENTS);
	const [selectedElements, setSelectedElements] = useState([]);

	
	const handleElementSelect = (elements) => {
		if(elements) {
			setSelectedElements(elements);

			var propertiesList = [];
			selectedElements.forEach((element) => {
				propertiesList = [...propertiesList, element.properties]
			});
		}
	};

	
	const handleElementCreate = (element) => {
		if(element) {
			setElements(...elements, element);
		}
	}

	const handlePropertyChange = (element, property, value) => {
		let newElements = [...elements];
		newElements.find(element);
	}

	
	return (
		<>
			<h1>Floatful</h1>
			<SelectorList 
				elements = {elements}
				onElementSelect={handleElementSelect}
				onElementCreate={handleElementCreate}
			/>
			{
				/*	TODO:
					Refactor code to not have to map over same selected elements twice,
					while still separating properties list from element visualizer within
					the app (one will be main content and the other will be in right menu)
				*/
			}
			{selectedElements.map((element, i) => (
				<PropertiesList 
					key = {element}
					element = {element}
					onPropertyChange = {handlePropertyChange}
				/>
			))}
			
			{selectedElements.map((element, i) => (
				<ElementVisualizer 
					key = {element}
					element = {element}
				/>
			))}
		</>
    );
}

export default App;
