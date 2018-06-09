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
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this); 
  }

  handleIncrementClick () {
    const number = this.state.number + 1;
    this.setState({ number });
  }
  handleDecrementClick () {
    const number = this.state.number - 1;
    this.setState({ number });
  }

  handleResetClick () {
    this.setState({ number: 0});
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleIncrementClick} color='green' name='Increment'/>
        <Button onClick={this.handleDecrementClick} color='red' name='Decrement'/>
        <Button onClick={this.handleResetClick} color='yellow' name='Reset'/>
        <NumberDisplay  number={this.state.number}/>
      </div>
    );
  }
}

export default App;
