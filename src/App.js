import './css/App.css';
import React, {useState} from 'react';
import SelectorList from './components/selectors/SelectorList';
import PropertiesList from './components/properties/PropertiesList';
import ElementVisualizer from './components/visualizer/Element';


const App = () => {

	const [selectedElements, setSelectedElements] = useState([]);
	const [elementProperties, setElementProperties] = useState([{}]);

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
				onElementSelect={handleElementSelect}
			/>
			{selectedElements.map((element, i) => {
				<PropertiesList 
					key = {element}
					element = {element}
					properties = {elementProperties[i]}
					onPropertyChange = {() =>{}}
				/>
			})}
			<ElementVisualizer 
				elements = {selectedElements}
				properties = {elementProperties}
			/>
		</>
    );
}

export default App;
