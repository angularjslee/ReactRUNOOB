import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props) {
    return (
      <div>
        <h1>This is condition.</h1>
        欢迎回来!
        <hr></hr>
      </div>
    )
  }
  
  function GuestGreeting(props) {
    return (
    <div>
      <h1>This is condition.</h1>
      请先注册。
      <hr></hr>
      </div>
    )
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('condition')
  );