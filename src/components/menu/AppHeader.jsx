import React from 'react';
//import '../images/logo.png';

const AppHeader = (props) => {
    return (
        <header className="app-header">
            <p className="app-logo">
                <img src = "logo.png" alt="Floatful"></img>
            </p>
            <h1 className="app-doc-name">{props.docName}</h1>
        </header>
    );
}

export default AppHeader