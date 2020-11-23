import React from 'react';
import ReactDOM from 'react-dom';

function HelloMessage(props) {
    return <div><h1>This is props</h1><h1>Hello {props.name}!</h1></div>;
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('props')
);