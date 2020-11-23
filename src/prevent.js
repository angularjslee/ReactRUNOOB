import React from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        警告!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
    
    render() {
      return (
        <div>
          <h1>This is prevent</h1>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? '隐藏' : '显示'}
          </button>
          <hr></hr>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Page />,
    document.getElementById('prevent')
  );