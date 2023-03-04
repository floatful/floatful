import './css/App.css';
import React, {useState} from 'react';
import SelectorList from './components/selectors/SelectorList';
import PropertiesList from './components/properties/PropertiesList';
import ElementVisualizer from './components/visualizer/ElementVisualizer';

import {CSSNumericProperty, CSSTextProperty} from './data/CSSProperty.js'
import CSSElement from './data/CSSElement';

/*
	ELEMENTS AND PROPERTIES OBJECTS:

	ELEMENT EXAMPLE:
	{
		selector: "h1 a",
		element: "a"
	}

	PROPERTY EXAMPLE 1 (with number-based value):
	{
		"name": "font-size",
		"key": "fontSize",
		"value":"2px",
		"number": 2,
		"unit": "px"
	}
	PROPERTY EXAMPLE 1 (with keyword-based value):
	{
		"name": "text-decoration",
		"key": "textDecoration",
		"value": "none"
	}
 */

const App = () => {

	const DEFAULT_ELEMENTS = [
		new CSSElement("div", null, [
			new CSSNumericProperty("margin", "margin", 10, "px"),
			new CSSTextProperty("box-sizing", "boxSizing", ["border-box", "inherit"], "border-box")
		]),
		new CSSElement("h1", null, [
			new CSSNumericProperty("font-size", "fontSize", 2, "rem")
		])
	];

	const [elements, setElements] = useState(DEFAULT_ELEMENTS);
	const [selectedElements, setSelectedElements] = useState([]);

	/**
	 * 
	 * @param {*} elements 
	 */
	const handleElementSelect = (elements) => {
		if(elements) {
			setSelectedElements(elements);

			var propertiesList = [];
			selectedElements.forEach((element) => {
				propertiesList = [...propertiesList, getElementProperties(element)]
			});
		}
	};

	/**
	 * 	FUNCTION:
	 * 		handleElementCreate
	 * 	DESCRIPTION:
	 * 	@param {*} element new element created by the user, with blank 
	 */
	const handleElementCreate = (element) => {
		if(element) {
			setElements(...elements, element);
		}
	}

	// More will probably be added to this.
	const getElementProperties = (element) => {
		return element.properties;
	}

	/*

	*/
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
			{selectedElements.map((element, i) => {return(
				<PropertiesList 
					key = {element}
					element = {element}
					onPropertyChange = {() =>{}}
				/>
			)})}
			
			{selectedElements.map((element, i) => {return(
				<ElementVisualizer 
					key = {element}
					element = {element}
				/>
			)})}
		</>
    );
}

export default App;
