import React from 'react';
import ReactDOM from 'react-dom';

class Popper extends React.Component{
  constructor(){
      super();
      this.state = {name:'Hello world!'};
  }
  
  preventPop(name, e){    //事件对象e要放在最后
      e.preventDefault();
      alert(name);
  }
  
  render(){
      return (
          <div>
              <p>hello</p>
              {/* 通过 bind() 方法传递参数。 */}
              <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
              <hr></hr>
          </div>
      );
  }
}

ReactDOM.render(
  <Popper />,
  document.getElementById('eventPass')
);

/*
// 通常我们会为事件处理程序传递额外的参数。例如，若是 id 是你要删除那一行的 id，以下两种方式都可以向事件处理程序传递参数：
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
*/