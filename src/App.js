import './css/App.css';
import React, {useState} from 'react';
import SelectorList from './components/selectors/SelectorList';
import PropertiesList from './components/properties/PropertiesList';
import ElementVisualizer from './components/visualizer/ElementVisualizer';

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

	const DEFAULT_ELEMENTS = ['div', 'h1'];
	const DEFAULT_PROPERTIES = {
		"div":[
			{
				"name":"margin",
				"key":"margin",
				"value":"10px",
				"number":10,
				"units":"px"
			},
			{
				"name":"padding",
				"key":"padding",
				"value":"5px",
				"number":5,
				"units":"px"
			}
		],
		"h1":[
			{
				"name":"font-size",
				"key":"fontSize",
				"value":"2rem",
				"number":2,
				"units":"rem"
			}
		]
	}

	const [elements, setElements] = useState(DEFAULT_ELEMENTS);
	const [selectedElements, setSelectedElements] = useState([]);
	const [properties, setProperties] = useState(DEFAULT_PROPERTIES)
	const [elementProperties, setElementProperties] = useState([]);

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
			setElementProperties(propertiesList);
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
			setProperties({...properties, element:{}});
		}
	}

	// More will probably be added to this.
	const getElementProperties = (element) => {
		return properties[element];
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
			{selectedElements.map((element, i) => {return(
				<PropertiesList 
					key = {element}
					element = {element}
					properties = {elementProperties[i]}
					onPropertyChange = {() =>{}}
				/>
			)})}
			
			{selectedElements.map((element, i) => {return(
				<ElementVisualizer 
					key = {element}
					element = {element}
					properties = {elementProperties[i]}
				/>
			)})}
		</>
    );
}

export default App;
