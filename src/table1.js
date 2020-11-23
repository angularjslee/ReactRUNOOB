import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <div>
    <h1>This is table1</h1>
    <ul>{listItems}</ul>
    <hr></hr>
  </div>,
  document.getElementById('table1')
);



