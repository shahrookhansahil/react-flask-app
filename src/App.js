import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  var timestamp = currentTime;

// Convert Unix timestamp to milliseconds (JavaScript uses milliseconds, not seconds)
  var date = new Date(timestamp * 1000);

// Format the date as a string
  var formattedTime = date.toISOString().slice(0, 19).replace("T", " ");


  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time from Flask is : {currentTime} <br/><br/> and formated time is given below.</p>
        <h1>{formattedTime}</h1>
      </header>
    </div>
  );
}

export default App;
