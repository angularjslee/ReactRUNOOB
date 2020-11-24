import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
      console.log(this);
      console.log(props);
      return (
        <div>
        <h1>This is props-default</h1>
        <p>Hello, {this.props.name}</p>
        <hr></hr>
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