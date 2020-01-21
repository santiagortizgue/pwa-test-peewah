import React from 'react';
import logo from './Peewah.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Hola, esta es una PWA para Peewah!
        </p>
      </header>
    </div>
  );
}

export default App;
