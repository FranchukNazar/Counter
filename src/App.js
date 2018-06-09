import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color='green' name='Increment'/>
        <Button color='red' name='Decrement'/>
        <Button color='yellow' name='Reset'/>
      </div>
    );
  }
}

export default App;
