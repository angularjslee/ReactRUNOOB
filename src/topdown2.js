import React from 'react';
import ReactDOM from 'react-dom';

function FormattedDate(props) {
  return <p>现在是 {props.date.toLocaleTimeString()}.</p>;
}
 
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
        <h1>This is topdown2</h1>
        <p><FormattedDate date={this.state.date} /></p>
        <hr></hr>
      </div>
    );
  }
}
 
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
 
ReactDOM.render(<App />, document.getElementById('topdown2'));