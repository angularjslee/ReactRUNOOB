import React from 'react';
import ReactDOM from 'react-dom';


class MyButton extends React.Component {
  // 子组件如何传值给父组件
  myIndex = 10;

  handleClick = () => {
    // 该子组件的该方法中，去调用父组件传递来的方法
    this.props.myClick(this.myIndex)
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.btnName}</button>
    );
  }
}


class MyForm extends React.Component {
  handleRegister = (arg1) => {
    console.log('Click Register Button and 父组件接收到子组件的值是：' + arg1);
    // 点击子组件的按钮，在父组件中接收到 myIndex 的值
  }

  handleLogin = (arg1) => {
    console.log('Click Login Button and 父组件接收到子组件的值是：' + arg1);
  }

  render() {
    return (
      <div>
        <MyButton myClick={this.handleRegister} btnName="Register"></MyButton>
        <MyButton myClick={this.handleLogin} btnName="Login"></MyButton>
      </div>
    );
  }
}

ReactDOM.render(
  <MyForm />,
  document.getElementById('event31')
);


