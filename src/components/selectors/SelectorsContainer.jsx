import React, {useState} from 'react';
import SelectionItem from './SelectionItem';
import AddSelectorModal from './AddSelectorModal';

const SelectorsContainer = (props) => {

    const [addSelector, setAddSelector] = useState(false);

    return (
        <div className = "selections">
            <button onClick={()=>setAddSelector(true)}>+</button>
            {addSelector && <AddSelectorModal onExit={()=>setAddSelector(false)}/>}
            <p>Selectors</p>
            <SelectionItem/>
        </div>
    );
}

export default SelectorsContainer;