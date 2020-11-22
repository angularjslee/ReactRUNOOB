import React from 'react';
import ReactDOM from 'react-dom';


// 方法一
class LoggingButton extends React.Component {
  // 这个语法确保了 `this` 绑定在  handleClick 中
  // 这里只是一个测试
  handleClick = () => {
    console.log('this is:', this);
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}



// 方法二
class LoggingButton2 extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }
 
  render() {
    //  这个语法确保了 `this` 绑定在  handleClick 中
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

ReactDOM.render(
  <LoggingButton />,
  document.getElementById('event2')
);

ReactDOM.render(
  <LoggingButton2 />,
  document.getElementById('event3')
);
