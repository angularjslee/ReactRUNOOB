import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
        <h1>This is props-default</h1>
        <h1>Hello, {this.props.name}</h1>
        </div>
      );
    }
  }
   
  HelloMessage.defaultProps = {
    name: 'default Runoob'
  };
   
  const element = <HelloMessage/>;
   
  ReactDOM.render(
    element,
    document.getElementById('propsDefault')
  );