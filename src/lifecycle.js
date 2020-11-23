import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
   
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
   
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
   
    tick() {
      this.setState({
        date: new Date()
      });
    }
   
    render() {
      return (
        <div>
          <h1>This is Lifecycle</h1>
          <p>现在是 {this.state.date.toLocaleTimeString()}.</p>
          <hr></hr>
        </div>
      );
    }
  }
   
ReactDOM.render(
<Clock />,
document.getElementById('lifecycle')
);