import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Button from './components/Button';
import NumberDisplay from './components/NumberDisplay';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(typeOfButton) {
    const eventTypes = {
      increment: this.state.number + 1,
      decrement: this.state.number - 1,
      reset: 0
    }
    this.setState({ number : eventTypes[typeOfButton] });
  }

  render() {
    return (
      <div className="App">
          <NumberDisplay number={this.state.number} />
        <div className="Buttons">
          <Button handleClick={this.handleClick} color='green' name='Increment' />
          <Button handleClick={this.handleClick} color='red' name='Decrement' />
          <Button handleClick={this.handleClick} color='yellow' name='Reset' />
        </div>
      </div>
    );
  }
}

export default App;
