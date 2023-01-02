// import './App.css';
import React, {useState} from 'react';
import MenuContainer from './components/menu/MenuContainer';
import MainContainer from './components/main/MainContainer';
import PropertiesContainer from './components/properties/PropertiesContainer';
import SelectorsContainer from './components/selectors/SelectorsContainer';

const App = () => {
  const [selectedFile, setSelectedFile] = useState("Untitled.txt");
  const [selectedElements, setSelectedElements] = useState([]);
  // const [selectedElements, setSelectedElements] = useState([null]);

  return (

    <div className="App">
      <h1>Floatful App</h1>
      {selectedFile? (
        <>
          <p>File Selected: {selectedFile}</p>
          <MenuContainer/>
          <SelectorsContainer
            setSelectedElements = {setSelectedElements}
            selectedElements = {selectedElements}
          />
          <PropertiesContainer
            setSelectedElements = {setSelectedElements}
            selectedElements = {selectedElements}
          />
          <MainContainer
            setSelectedElements = {setSelectedElements}
            selectedElements = {selectedElements}
          />
        </>
      ) : (
        <>
          <p>File Not Found</p>
          {setSelectedFile("File")}
        </>
      )}
    </div>
  );
}

export default App;
