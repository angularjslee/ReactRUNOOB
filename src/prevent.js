import React from 'react';
import ReactDOM from 'react-dom';

// 在极少数情况下，你可能希望隐藏组件，即使它被其他组件渲染。让 render 方法返回 null 而不是它的渲染结果即可实现。
// 在下面的例子中，<WarningBanner /> 根据属性 warn 的值条件渲染。如果 warn 的值是 false，则组件不会渲染：

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
        <p><WarningBanner warn={this.state.showWarning} /></p>
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