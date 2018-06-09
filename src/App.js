import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Button from './components/Button';
import NumberDisplay from './components/NumberDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color='green' name='Increment'/>
        <Button color='red' name='Decrement'/>
        <Button color='yellow' name='Reset'/>
        <NumberDisplay />
      </div>
    );
  }
}

export default App;
