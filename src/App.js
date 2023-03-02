import './css/App.css';
import React, {useState} from 'react';
import SelectorList from './components/selectors/SelectorList';
import PropertiesList from './components/properties/PropertiesList';
import ElementVisualizer from './components/visualizer/ElementVisualizer';


const App = () => {

	const [elements, setElements] = useState(['div', 'h1']);
	const [selectedElements, setSelectedElements] = useState(['div']);
	const [properties, setProperties] = useState({
		"div":{
			"margin":"10px",
			"padding":"5px"
		},
		"h1":{
			"font-size":"2rem"
		}
	})
	const [elementProperties, setElementProperties] = useState([{"margin":"2px","padding":"5px"}]);

	/**
	 * 
	 * @param {*} elements 
	 */
	const handleElementSelect = (elements) => {
		if(elements) {
			setSelectedElements(elements);

			var properties = [];
			selectedElements.forEach((element) => {
				properties = [...properties, getElementProperties(element)]
			});
			setElementProperties(properties);
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
