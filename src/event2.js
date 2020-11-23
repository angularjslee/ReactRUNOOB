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
      <div>
      <h1>This is event2</h1>
      <button onClick={this.handleClick}>
        Click me
      </button>
      <hr></hr>
      </div>
    );
  }
}



// 方法二
class LoggingButton2 extends React.Component {
  handleClick2() {
    console.log('this is:', this);
  }
 
  render() {
    //  这个语法确保了 `this` 绑定在  handleClick 中
    return (
      <div>
        <h1>This is event3</h1>
          <button onClick={(e) => this.handleClick2(e)}>
            Click me
          </button>
        <hr></hr>
      </div>
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
