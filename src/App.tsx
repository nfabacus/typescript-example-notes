import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';

function App() {
    const [ myText, setMyText ] = useState<string>('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>{myText}</h2>
        <TextField
            text={myText}
            isTrue
            myNumber={7}
            fn={(myName)=> { return myName }}
            person={{ firstName: 'Toby' }}
            handleChange={(e) => setMyText(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
