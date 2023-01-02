import React from 'react';

const PropertiesContainer = (props) => {
    return (
        <div className="floatful container--properties">
            <h2>Properties</h2>
            {props.selectedItem && <p>{props.selectedItem}</p>}
        </div>
    );
}

export default PropertiesContainer;