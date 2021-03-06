import React from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <p>&&</p>
        <h1>Hello!</h1>
        {/* 注重逻辑，如果长度大于1 ，显示长度信息 */}
        {unreadMessages.length > 0 &&
          <h2>
            您有 {unreadMessages.length} 条未读信息。
          </h2>
        }
        <hr></hr>
      </div>
    );
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('and')
  );