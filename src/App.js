import './css/App.css';
import React, {useState} from 'react';
import Selector from './components/selectors/Selector';
import SelectorForm from './components/selectors/SelectorForm';


const App = () => {
  return (
    <>
      <h1>Floatful</h1>
      <h2>Selectors</h2>
      <SelectorForm/>

      <ul id = "listSelectors">
        <Selector path = {"div"}/>
      </ul>

    </>
  );
}

export default App;
