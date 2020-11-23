import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
    // 对啦！这里不需要指定key:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // 又对啦！key应该在数组的上下文中被指定
      <ListItem key={number.toString()}
                value={number} />
    );
    return (
        <div>
            <h1>This is Keys</h1>
            <ul>
                {listItems}
            </ul>
            <hr></hr>
        </div>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('key1')
  );