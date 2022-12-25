import React, {useState} from 'react';
import MenuBar from './MenuBar';
import AppHeader from './AppHeader';

const MenuContainer = (props) => {
    const [selectType, setSelectType] = useState(null);
    return (
        <div className = "MenuContainer">
            <AppHeader docName={props.docName}/>
            <MenuBar/>
        </div>
    );
}

export default MenuContainer;