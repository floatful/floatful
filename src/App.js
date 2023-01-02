import './css/App.css';
import React, {useState} from 'react';
import MenuContainer from './components/menu/MenuContainer';
import MainContainer from './components/main/MainContainer';
import PropertiesContainer from './components/properties/PropertiesContainer';
import SelectorsContainer from './components/selectors/SelectorsContainer';

const App = () => {
  const [selectors, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  // const [selectedElements, setSelectedElements] = useState([]);
  // const [selectedElements, setSelectedElements] = useState([null]);

  return (

    <div className="App">
      <MenuContainer/>
      <SelectorsContainer
        items = {selectors}
        selectedItem = {selectedItem}
        onItemSelect = {setSelectedItem}
      />
      <PropertiesContainer
        items = {selectors}
        selectedItem = {selectedItem}
      />
      <MainContainer
        items = {selectors}
        selectedItem = {selectedItem}
      />
    </div>
  );
}

export default App;
