// import './App.css';
import React, {useState} from 'react';


const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [selectedElements, setSelectedElements] = useState([null]);

  return (
    <div className="App">
      <h1>Floatful App</h1>
      {selectedFile? (
        <>
          <p>File Selected</p>
        </>
      ) : (
        <>
          <p>File Not Found</p>
        </>
      )}
    </div>
  );
}

export default App;
