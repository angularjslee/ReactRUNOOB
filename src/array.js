import React from 'react';
import ReactDOM from 'react-dom';

var arr = [
    <h1>This is Array</h1>,
  ];
  ReactDOM.render(
    <div>
      {arr}
      <hr></hr>
    </div>,
    document.getElementById('arr')
);