import React from 'react';
import ReactDOM from 'react-dom';

function HelloMessage(props) {
    return <div><h1>This is props</h1><p>Hello {props.name}!</p><hr></hr></div>;
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('props')
);