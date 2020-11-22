import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
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