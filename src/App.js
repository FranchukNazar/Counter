import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Button from './components/Button';
import NumberDisplay from './components/NumberDisplay';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number: 1
    }
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  handleIncrementClick () {
    const number = this.state.number + 1;
    this.setState({ number })
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleIncrementClick} color='green' name='Increment'/>
        <Button color='red' name='Decrement'/>
        <Button color='yellow' name='Reset'/>
        <NumberDisplay  number={this.state.number}/>
      </div>
    );
  }
}

export default App;
