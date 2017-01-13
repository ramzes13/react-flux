import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};

// This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <a href="#" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </a>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

class NumberList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {listItems: props.listItems};
  }

  render() {
    const listItems = this.state.listItems.map((number) =>
    <li key={number.toString()}>
      {number} 
    </li>
    );

    return <ul>{listItems}</ul>
  }
}
const numbers = [1, 2, 3, 4, 5];


ReactDOM.render(
  <NumberList listItems={numbers} />,
  document.getElementById('root')
);