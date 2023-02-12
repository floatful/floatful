import React, {useState} from 'react'

const Element = (props) => {
    const [MainElement, setMainElement] = useState('div');
    const [selector, setSelector] = useState('div');
    const [rules, setRules] = useState({'color': 'blue'});

    const changeElement = () => {
        setMainElement('h1');
        setRules({...rules, 'backgroundColor': 'red'});
    }

    return (
        <>
            <p>Element:</p>
            {React.createElement(MainElement, {style:rules}, "Main Element}")}
            <button onClick={() => {
                changeElement();
            }}>Change Rules</button>
        </>
    );
}

export default Element