import React from 'react';
import ReactDOM from 'react-dom';
// 我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。
// 在 render 函数中, 我们设置 name 和 site 来获取父组件传递过来的数据。
class WebSite extends React.Component {
    constructor() {
        super();
   
        this.state = {
          name: "菜鸟教程",
          site: "https://www.runoob.com"
        }
      }
    render() {
      return (
        <div>
          <Name name={this.state.name} />
          <Link site={this.state.site} />
        </div>
      );
    }
}
   
   
   
  class Name extends React.Component {
    render() {
      return (
        <h1>{this.props.name}</h1>
      );
    }
  }
   
  class Link extends React.Component {
    render() {
      return (
        <a href={this.props.site}>
          {this.props.site}
        </a>
      );
    }
  }
   
  ReactDOM.render(
    <WebSite />,
    document.getElementById('propsState')
  );