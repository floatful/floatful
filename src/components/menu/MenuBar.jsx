import React, {useEffect, useState} from 'react';

const MenuItem = (props) => {
    const handleItemClick = (e) => {
        props.click();
    }
    const handleItemHover = (e) => {
        
    }
    return (
        <p>Menu Item</p>
    );
}

const MenuBar = (props) => {
    useEffect(() => {

    }, []);
    return (
        <ul className = "app-menu">
            <li className = ""><MenuItem/></li>
        </ul>
    )
}

export default MenuBar;