import React, {useEffect, useState} from 'react';

const MenuItem = (props) => {
    const handleItemClick = (e) => {
        props.click();
    }
    const handleItemHover = (e) => {
        
    }
    return (
        <li>
            <span 
                /*{props.isSubMenu? (
                    onMouseOver={handleItemHover}
                ): (
                    onClick = {handleItemClick}
                )}*/
            >{props.value}</span>
            <div className = ""></div>
        </li>
    );
}

const MenuBar = (props) => {
    useEffect(() => {

    }, []);
    return (
        <ul className = "app-menu">
            <li className = ""></li>
        </ul>
    )
}

export default MenuBar;