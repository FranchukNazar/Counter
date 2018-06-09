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
    // let number;
    // switch (typeOfButton) {
    //   case 'increment':
    //     number = this.state.number + 1;
    //     break;
    //   case 'decrement':
    //     number = this.state.number - 1;
    //     break;
    //   case 'reset':
    //     number = 0;
    //     break;
    // }
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
        <Button onClick={this.handleClick} color='green' name='Increment'/>
        <Button onClick={this.handleClick} color='red' name='Decrement'/>
        <Button onClick={this.handleClick} color='yellow' name='Reset'/>
        <NumberDisplay  number={this.state.number}/>
      </div>
    );
  }
}

export default App;
