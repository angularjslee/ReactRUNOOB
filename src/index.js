import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

// 引用独立文件
import './helloworld_react';
import './expression';
import './style';
import './comment';
import "./array";
import "./component";
import "./component-exercise";
import "./state";
import "./lifecycle";
import "./topdown";
import "./topdown2";
import "./props";
import "./props-default";
import "./props-state";
import "./propsVerify";
import "./event";
import "./event2";
import "./event3";
import "./eventPass";
import "./condition";
import "./elementVar";
import "./&&";
import "./prevent";
import "./table1";
import "./table2";
import "./key1";
import "./key2";
import "./key3";
import "./demo/demo1-basic"
import "./children";
// import "./demo/demo2-ParentChild";


// Default Example
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


  /*  React 元素渲染  */
      // Example1:
      const element1 = <div><h1>E1-Hello, world!</h1><hr></hr></div>;
      ReactDOM.render(
          element1,
          document.getElementById('example1')
      );


      // // Example2:
      function tick2() {
        const element2 = (
          <div>
            <h1>E2-Hello, world!</h1>
            <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
            <hr></hr>
          </div>
        );
        ReactDOM.render(
          element2,
          document.getElementById('example2')
        );
      }
       
      setInterval(tick2, 1000);
      

      // // Example3:
      function Clock3(props) {
        return (
          <div>
            <h1>E3-Hello, world!</h1>
            <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
            <hr></hr>
          </div>
        );
      }
      
      function tick3() {
        ReactDOM.render(
          <Clock3 date={new Date()} />,
          document.getElementById('example3')
        );
      }
      
      setInterval(tick3, 1000);


      // // Example4:
      class Clock4 extends React.Component {
        render() {
          return (
            <div>
              <h1>E4-Hello, world!</h1>
              <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
              <hr></hr>
            </div>
          );
        }
      }
      
      function tick4() {
        ReactDOM.render(
          <Clock4 date={new Date()} />,
          document.getElementById('example4')
        );
      }
      
      setInterval(tick4, 1000);


      /* React JSX  */




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
