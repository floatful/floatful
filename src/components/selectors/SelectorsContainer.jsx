import React, {useState} from 'react';
import SelectionItem from './SelectionItem';
import AddSelectorModal from './AddSelectorModal';

const SelectorsContainer = (props) => {

    const [addSelector, setAddSelector] = useState(false);

    const selectElement = (element) => {
        props.setSelectedItems(element);
    }

    return (
        <div className = "floatful container--elements">
            <h2>Elements</h2>
            <button onClick={()=>setAddSelector(true)}>+</button>
            {addSelector && <AddSelectorModal onExit={()=>setAddSelector(false)}/>}
            <p>Selectors</p>
            <SelectionItem element="div" onClick={()=>selectElement("div")}/>
        </div>
    );
}

export default SelectorsContainer;