import './css/App.css';
import React, {useState} from 'react';
import Selector from './components/selectors/Selector';
import SelectorForm from './components/selectors/SelectorForm';
import Element from './components/visualizer/Element';


const App = () => {
  return (
    <>
      <h1>Floatful</h1>
      <h2>Selectors</h2>
      <SelectorForm/>

      <ul id = "listSelectors">
        <Selector path = {"div"}/>
      </ul>

      <Element></Element>
    </>
  );
}

export default App;
