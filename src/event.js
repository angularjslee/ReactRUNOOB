import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
   
      // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
   
    render() {
      return (
        <div>
          <h1>This is event1</h1>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
          <hr></hr>
        </div>
      );
    }
  }
   
  ReactDOM.render(
    <Toggle />,
    document.getElementById('event')
  );