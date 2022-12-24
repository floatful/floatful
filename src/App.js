// import './App.css';
import React, {useState} from 'react';
import MenuContainer from './menu/MenuContainer';
import MainContainer from './main/MainContainer';
import PropertiesContainer from './properties/PropertiesContainer';
import SelectorsContainer from './selectors/SelectorsContainer';


const App = () => {
  const [selectedFile, setSelectedFile] = useState("Untitled.txt");
  // const [selectedElements, setSelectedElements] = useState([null]);

  return (
    <div className="App">
      <h1>Floatful App</h1>
      {selectedFile? (
        <>
          <p>File Selected: {selectedFile}</p>
          <MenuContainer/>
          <SelectorsContainer/>
          <PropertiesContainer/>
          <MainContainer/>
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
