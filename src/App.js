import './css/App.css';
import React, {useState} from 'react';
import Selector from './components/selectors/Selector';
import SelectorForm from './components/selectors/SelectorForm';
import Element from './components/visualizer/Element';


const App = () => {

  /*const [Elements, setElements] = useState([
    {
      'selector': 'div',
      'rules': {
        'color':'blue',
        'backgroundColor':'gray'
      }
    },
    {
      'selector': 'a',
      'rules': {
        'color':'blue',
        'backgroundColor':'gray'
      }
    }
  ]);*/

  const [Elements, setElements] = useState(['div', 'a']);

  const addElement = (e) => {
    console.log("Trying to add element")
    setElements([...Elements, e]);
    //setElements([...Elements, {'selector':e, 'rules':{}}]);
    console.log(Elements);
  }

  /* NOT SURE IF THIS WORKS YET
  const removeElement = (e) => {
    this.setState(prevState => ({Elements: prevState.Elements.filter(element => element !== e)}));
  }
  */

  const listElements = Elements.map((e) => {
    <>
      <p>Element</p>
    </>
  });

  return (
    <>
      <h1>Floatful</h1>
      <h2>Selectors</h2>
      <SelectorForm addElement={addElement}/>

      <ul id = "listSelectors">
        <Selector path = {"div"}/>
      </ul>
      <div className="Elements">
        {listElements}
      </div>
      <Element></Element>
    </>
  );
}

export default App;
