import React, { Component } from 'react';
import logo from './logo.svg';
import openSocket from 'socket.io-client';
import './App.css';

const socket = openSocket('http://localhost:3000');

class App extends Component {
  constructor(props){
    super(props); 
    
  }

  componentDidMount() {
    socket.emit("new-message", "HERE IT IS"); 
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
