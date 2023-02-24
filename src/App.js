import './css/App.css';
import React, {useState} from 'react';
import SelectorList from './components/selectors/SelectorList';
import PropertiesList from './components/properties/PropertiesList';
import ElementVisualizer from './components/visualizer/ElementVisualizer';


const App = () => {

	const [elements, setElements] = useState(['div', 'h1']);
	const [selectedElements, setSelectedElements] = useState(['div']);
	const [elementProperties, setElementProperties] = useState([{"name":"margin","value":"2px"}]);

	const getElementProperties = (element) => {
		return {};
	}

	const handleElementSelect = (elements) => {
		setSelectedElements(elements);
		var properties = [];
		selectedElements.forEach((element) => {
			properties = [...properties, getElementProperties(element)]
		});
		setElementProperties(properties);
	};

	return (
		<>
			<h1>Floatful</h1>
			<SelectorList 
				elements = {elements}
				onElementSelect={handleElementSelect}
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
