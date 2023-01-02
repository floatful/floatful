import React, {useState} from 'react';
//import '../images/logo.png';

const AppHeader = (props) => {
    const [documentName, setDocumentName] = useState("Untitled Document");
    return (
        <header className="floatful app-header">
            {props.docName && setDocumentName(props.docName)}
            <p className="floatful app-logo">
                <img src = "logo.png" alt="Floatful"></img>
            </p>
            <h1 className="floatful document-name">{documentName}</h1>
        </header>
    );
}

export default AppHeader