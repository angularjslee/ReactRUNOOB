import React from 'react';
import ReactDOM from 'react-dom';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <div>
    <h1>This is table2</h1>
    <ul>{listItems}</ul>
    <hr></hr>
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('table2')
);



