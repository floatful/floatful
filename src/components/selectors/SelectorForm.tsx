import React, {useState} from 'react'


const SelectorForm = (props:{addElement:(selector:String) => {}}) => {

    const [selector, setSelector] = useState("");

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSelector(event.target.value);
    }

    return (
        <form id = "addSelectorForm">
            <input 
                type = "text"
                id = "addSelectorInput"
                className = "selector-input"
                onChange={handleChange}
            />
                <button  
                    onClick={() => {props.addElement(selector)}}
                >
            +
            </button>
        </form>
  )
}

export default SelectorForm