import React from 'react';
import ReactDOM from 'react-dom';

var myStyle = {
    fontSize: 50,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>This is Style</h1>,
    document.getElementById('style')
);