import React from 'react';
import ReactDOM from 'react-dom';

var myStyle = {
    fontSize: 50,
    color: '#FF0000'
};
ReactDOM.render(
    <div>
    <h1 style = {myStyle}>This is Style</h1>
    <hr></hr>
    </div>,
    document.getElementById('style')
);